import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  text: string;
  author: string;
}
