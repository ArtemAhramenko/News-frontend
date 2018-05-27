import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {Article} from "../../../models/article";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../../services/article.service";
import {Router} from "@angular/router";
import {selectUser} from "../../../models/selectUser";

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {

  userForm: FormGroup;
  user: User = new User();
  @Input() news: Article[];
  changePass: boolean = false;
  changeName: boolean = false;
  invalid = false;
  peoples = false;
  allUsers: User[] = [];
  admin = false;

  constructor(private usualRouter: Router, private fb: FormBuilder, private userService: UserService, private articleService: ArticleService) { }

  ngOnInit() {
    if (localStorage.getItem("roles").includes("ADMIN")) {
      this.admin = true;
    }
    this.userForm = this.fb.group({
      'alias': [' ', [
        Validators.required
      ]],
      'alias2': [' ', [
        Validators.required
      ]],
      'password': [' ', [
        Validators.required
      ]],
      'password2': [' ', [
        Validators.required
      ]]
    });

    if (this.userService.getCurrentUser() != null) {
      this.user = this.userService.getUserCred();
      this.news = this.userService.getUserCred().news;
    }
  }

  changePassBtn() {
    this.changePass = !this.changePass;
  }

  changeNameBtn() {
    this.changeName = !this.changeName;
  }

  saveChanges() {
    if (this.userForm.invalid) {
      this.invalid = true;
      return
    }
    this.user.id = this.userService.getCurrentUser().id;
    this.userService.sendChanges(this.user).subscribe();
  }

  changeListArticles() {
    this.peoples = false;
  }

  changeListPeoples() {
    this.peoples = true;
    this.userService.getAllUsers().subscribe((data: User[]) => {
        this.allUsers = data;
        console.log(this.allUsers);
        console.log("sadsadsad");
      }
    )
  }

  profileCheck(id: number) {
    this.userService.me(id).subscribe(data => {
      this.userService.selectedUser(data as selectUser);
      console.log(data);
      this.usualRouter.navigate(["selectedUser/"+id]);
    });
  }
}
