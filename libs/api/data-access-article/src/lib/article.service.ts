import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleDocument } from './article.model';
import { CreateArticleDto } from '@nx-office-hour-nestjs/api/data-access-dtos';

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument>) {}

  async getAll() {
    return await this.articleModel.find().exec();
  }

  async createArticle(dto: CreateArticleDto) {
    const article = new this.articleModel(dto);

    return await this.articleModel.create(article);
  }
}
