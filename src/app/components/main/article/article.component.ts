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
  constructor(private router: ActivatedRoute, private articleService: ArticleService) {
     this.article = new Article({ section: {}});
  }


  ngOnInit() {
    this.getArticleId();
    this.getNews();
    console.log(this.articleId);

  }
  getArticleId(){
    this.router.params.subscribe(
      (params: Params) => {
        this.articleId = params['id'];
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
