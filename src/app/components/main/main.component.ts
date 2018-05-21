import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../constants/API';
import {Article} from '../../models/article';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Role} from "../../models/role";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  articles: Article[] = [];
  user: User = new User();
  role: Role = new Role;
  auth: boolean;


  constructor(private http: HttpClient, private userService: UserService) { }

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
    this.http.get(API_URL + '/getarticle').subscribe(
      (news: Article[]) => { this.articles = news }
    );
  }
}
