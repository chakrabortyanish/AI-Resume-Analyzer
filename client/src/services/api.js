import axios from 'axios'

export const uploadResume = async (file) => {
  const formData = new FormData()
  formData.append('resume', file)

  const res = await axios.post('http://localhost:5000/api/upload', formData)
  return res.data
}