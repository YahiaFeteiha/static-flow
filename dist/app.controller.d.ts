/// <reference types="multer" />
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    uploadFile(file: Express.Multer.File): {
        message: string;
        file: Express.Multer.File;
        url: string;
    };
}
