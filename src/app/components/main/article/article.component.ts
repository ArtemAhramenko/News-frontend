import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from '../../../services/article.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Article} from '../../../models/article';
import {User} from '../../../models/user';
import {Role} from '../../../models/role';
import {UserService} from '../../../services/user.service';
import {ArticleCreate} from '../../../models/articleCreate';
import {Rating} from '../../../models/rating';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleId: String;
  article : Article;
  rating: Rating = new Rating();
  starsCount: number;
  user: User = new User();
  role: Role = new Role;
  auth: boolean;

  constructor(private router: ActivatedRoute, private articleService: ArticleService, private userService: UserService) {
     this.article = new Article({ section: {}});
  }


  ngOnInit() {
    if (this.userService.getCurrentUser() != null) {
      this.user = this.userService.getCurrentUser();
      if (this.user.roles !== null) {
        this.auth = true;
      }
    } else {
      this.role.id = 0;
      this.role.name = "USER";
      this.user.roles = [this.role];
    }
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
  getRating(){
    this.rating.userRating = this.starsCount;
    this.rating.userId = this.user.id;
    this.rating.articleId = this.article.id;
    console.log(this.starsCount);
    console.log(this.rating);
    this.articleService.addRating(this.rating).subscribe(data => {
    });
  }

}
