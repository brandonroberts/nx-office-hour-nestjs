import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlesApiService } from '@nx-office-hour-nestjs/article/data-access-api';
@Component({
  selector: 'nx-office-hour-nestjs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles$ = this.articles.articleControllerGetAllArticles();
  
  constructor(private articles: ArticlesApiService) {}
}
