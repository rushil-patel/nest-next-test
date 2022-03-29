import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Render,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { ParamsInterceptor } from './params.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  @UseInterceptors(ParamsInterceptor)
  home() {
    return {};
  }

  @Get('/:id')
  @Render('[id]')
  public post(@Param('id') id: string) {
    return { id };
  }

  @Get('/api/posts')
  public listPosts() {
    return this.appService.getPosts();
  }

  @Get('/api/posts/:id')
  public getPostById(@Param('id', new ParseIntPipe()) id: number) {
    return this.appService.getPost(id);
  }
}
