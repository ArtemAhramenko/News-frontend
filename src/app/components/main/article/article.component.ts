import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from '../../../services/article.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Article} from '../../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleId: String;
  article : Article;
  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
     this.article = new Article({});
  }

  ngOnInit() {
    this.getArticleId();
    this.getNews();
    console.log(this.articleId);
  }
  getArticleId(){
    this.route.params.subscribe(
      (params: Params) => {
        this.articleId = params['id']
      }
    );
  }
  getNews(){
    this.articleService.getArticleId(this.articleId).subscribe((data) => {
      this.article = new Article(data);
      console.log(data);
    }, err => console.log(err));
  }
}
