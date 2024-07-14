import { diskStorage } from 'multer';
import { extname } from 'path';

const allowedMimeTypes = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'application/pdf',
  'text/plain',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // docx
  'application/msword', // doc
];

export const multerConfig = {
  storage: diskStorage({
    destination: './public',
    filename: (
      req: any,
      file: { originalname: string },
      cb: (arg0: null, arg1: string) => void,
    ) => {
      const name = file.originalname.split('.')[0];
      const fileExtName = extname(file.originalname);
      cb(null, `${name}-${Date.now()}${fileExtName}`);
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (
    req: any,
    file: { mimetype: string },
    cb: (arg0: Error, arg1: boolean) => void,
  ) => {
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(
        new Error('Invalid file type. Only certain file types are allowed!'),
        false,
      );
    }
    cb(null, true);
  },
};
