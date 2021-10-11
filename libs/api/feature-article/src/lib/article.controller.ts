import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';

import { Article, ArticleService } from '@nx-office-hour-nestjs/api/data-access-article';
import { CreateArticleDto } from '@nx-office-hour-nestjs/api/data-access-dtos';

@Controller('articles')
@ApiTags('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  @ApiOkResponse({
    type: Article,
    isArray: true
  })
  async getAllArticles() {
    return await this.articleService.getAll();
  }

  @Post()
  @ApiCreatedResponse({
    type: Article
  })
  async createArticle(@Body() article: CreateArticleDto) {
    return await this.articleService.createArticle(article);
  }
}