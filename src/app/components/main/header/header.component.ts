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
import {TranslateService} from '@ngx-translate/core';
import {LocalizationService} from '../../../services/localization.service';
import {SearchRequest} from "../../../models/searchRequest";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userForm: FormGroup;
  sections: Section[] = [];
  user: User = new User();
  auth: boolean = false;
  writer: boolean = false;
  role: Role = new Role();
  roleReader: Role = new Role();
  searchString = "";
  request: SearchRequest = new SearchRequest();
  public translate: TranslateService;
  constructor(private fb: FormBuilder, private usualRouter: Router, private router: ActivatedRoute, private userService: UserService,
              private articleService: ArticleService, private http: HttpClient, private localizate: LocalizationService) {
    this.translate = localizate.localize;
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      'searchString': ['', [
        Validators.required
      ]]
    })
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

  forCreate() {
    this.articleService.create().subscribe(data => {
      this.usualRouter.navigate(["create"]);
    });
  }

  exit() {
    localStorage.clear();
    this.usualRouter.navigate([MainComponent]);
  }

  changeLang(lang){
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  searchMethod(str: string) {
    console.log(str);
    this.usualRouter.navigate(["search/"+str]);
  }
}
