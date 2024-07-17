import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from './multer.config';
import { AppService } from './app.service';
import { Express, Response } from 'express';
import { join } from 'path';

@Controller('upload')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerConfig))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException(
        'No file provided or invalid file type',
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      message: 'File uploaded successfully',
      file: file,
      url: `/uploads/${file.filename}`,
    };
  }
  // @Get(':filename')
  // async getFile(@Param('filename') filename: string, @Res() res: Response) {
  //   const filePath = join(__dirname, '..', 'public/uploads', filename);
  //   console.log('Serving file from:', filePath);
  //   res.sendFile(filePath, (err) => {
  //     if (err) {
  //       console.log(err);
  //       res.status(404).send({ message: 'File not found' });
  //     }
  //   });
  // }
}
