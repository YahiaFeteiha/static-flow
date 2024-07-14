"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const allowedMimeTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'text/plain',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
];
exports.multerConfig = {
    storage: (0, multer_1.diskStorage)({
        destination: './public',
        filename: (req, file, cb) => {
            const name = file.originalname.split('.')[0];
            const fileExtName = (0, path_1.extname)(file.originalname);
            cb(null, `${name}-${Date.now()}${fileExtName}`);
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        if (!allowedMimeTypes.includes(file.mimetype)) {
            return cb(new Error('Invalid file type. Only certain file types are allowed!'), false);
        }
        cb(null, true);
    },
};
//# sourceMappingURL=multer.config.js.map