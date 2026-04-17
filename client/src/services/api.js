import axios from "axios";

export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("resume", file);

  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/resume/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};
