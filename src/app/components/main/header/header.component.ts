import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from "../../../services/user.service";
import {Article} from "../../../models/article";
import {User} from "../../../models/user";
import {MainComponent} from "../main.component";
import {Role} from "../../../models/role";
import {ArticleService} from "../../../services/article.service";
import {API_URL} from '../../../constants/API';
import {Section} from '../../../models/section';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sections: Section[] = [];
  user: User = new User();
  auth: boolean = false;
  writer: boolean = false;
  role: Role = new Role();
  roleReader: Role = new Role();
  constructor(private usualRouter: Router, private router: ActivatedRoute, private userService: UserService,
              private articleService: ArticleService, private http: HttpClient) { }

  ngOnInit() {
    this.roleReader.name = "WRITER";
    if (this.userService.getCurrentUser() != null) {
      this.user = this.userService.getCurrentUser();
      if (this.user.roles !== null) {
        this.auth = true;
        if (localStorage.getItem("roles").includes("WRITER")) {
          this.writer = true;
        }
      }
    } else {
      this.role.id = 0;
      this.role.name = "USER";
      this.user.roles = [this.role];
    }
    this.http.get(API_URL + '/getallsections').subscribe(
      (headings: Section[]) => {
        this.sections = headings;
        console.log(this.sections);
      }
    );
  }

  showLoginForm() {
    this.usualRouter.navigate(["login"]);
  }

  showUser() {
    this.userService.me(this.user.id).subscribe(data => {
      this.userService.saveUserCred(data as User);
      console.log(data);
      this.usualRouter.navigate(["me/"+this.user.id]);
    });
  }

  create() {
    this.articleService.create().subscribe(data => {
      this.usualRouter.navigate([API_URL + data]);
    });
  }

  exit() {
    localStorage.clear();
    this.usualRouter.navigate([MainComponent]);
  }

}
