import { Controller, Get } from '@nestjs/common';
import { ArticleService } from '@nx-office-hour-nestjs/api/data-access-article';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  async getAllArticles() {
    return await this.articleService.getAll();
  }
}