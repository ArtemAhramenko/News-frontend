import { Component, OnInit } from '@angular/core';
import {Article} from '../../../models/article';
import {Role} from '../../../models/role';
import {UserService} from '../../../services/user.service';
import {ArticleService} from '../../../services/article.service';
import {HttpClient} from '@angular/common/http';
import {POLITICS_ID} from '../../../constants/SectionsId';
import {User} from '../../../models/user';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

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
    // this.http.get(API_URL + '/getarticle').subscribe(
    //   (news: Article[]) => {
    //     this.articles = news;
    //     console.log(news);
    //   }
    // );

  }

  getNews() {
    this.articleService.getSection(POLITICS_ID).subscribe((news: Article[]) => {
        this.articles = news;
        console.log(news);
      }
    );
  }

}