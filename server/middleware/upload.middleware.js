import multer from 'multer';
// store file temporarily
const storage = multer.memoryStorage();

export const upload = multer({ storage });
