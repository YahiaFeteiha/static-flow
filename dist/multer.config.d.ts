/// <reference types="multer" />
export declare const multerConfig: {
    storage: import("multer").StorageEngine;
    limits: {
        fileSize: number;
    };
    fileFilter: (req: any, file: {
        mimetype: string;
    }, cb: (arg0: Error, arg1: boolean) => void) => void;
};
