import { Component, OnInit } from '@angular/core';
import {Article} from '../../../models/article';
import {Role} from '../../../models/role';
import {UserService} from '../../../services/user.service';
import {ArticleService} from '../../../services/article.service';
import {HttpClient} from '@angular/common/http';
import {TECHNOLOGY_ID} from '../../../constants/SectionsId';
import {User} from '../../../models/user';
import {API_URL} from '../../../constants/API';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  popularArticles: Article[] = [];
  articles: Article[] = [];

  user: User = new User();
  role: Role = new Role;
  auth: boolean;
  constructor(private http: HttpClient, private userService: UserService,  private articleService: ArticleService) { }

  ngOnInit() {
    this.getNews();
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
    this.http.get(API_URL + '/getpopulararticle').subscribe(
      (news: Article[]) => {
        this.popularArticles = news;
        console.log(news);
      }
    );

  }

  getNews() {
    this.articleService.getSection(TECHNOLOGY_ID).subscribe((news: Article[]) => {
        this.articles = news;
        console.log(news);
      }
    );
  }
}
