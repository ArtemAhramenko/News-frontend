import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {Article} from "../../../models/article";
import {Router} from "@angular/router";
import {ArticleService} from "../../../services/article.service";
import {selectUser} from "../../../models/selectUser";
import {AdminService} from "../../../services/admin.service";


@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {

  userForm: FormGroup;
  user: User = new User();
  @Input() news: Article[];
  invalid = false;
  peoples = false;
  allUsers: User[] = [];
  admin = false;
  selectUser: selectUser = new selectUser();

  constructor(private usualRouter: Router, private fb: FormBuilder,
              private userService: UserService, private articleService: ArticleService,
              private adminService: AdminService) { }

  ngOnInit() {
    this.selectUser = this.userService.getSelectedUser();
    if (localStorage.getItem("roles").includes("ADMIN")) {
      this.admin = true;
    }
    if (this.userService.getCurrentUser() != null) {
      this.user = this.userService.getUserCred();
      this.news = this.userService.getUserCred().news;
    }
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
      this.selectUser = this.userService.getSelectedUser();
      console.log(this.selectUser.alias);
      this.usualRouter.navigate(["selectedUser/"+id]);
    });
  }

  disableUser() {
    let id = JSON.parse(localStorage.getItem('selectedUserId'));
    console.log(id);
    this.adminService.disableUser(id).subscribe(data => {
      console.log(data);
    });
    alert("User " + this.selectUser.alias + " with id " + this.selectUser.id + " is disabled")
  }

  deleteUser() {
    let id = JSON.parse(localStorage.getItem('selectedUserId'));
    alert("User " + this.selectUser.alias + " with id " + this.selectUser.id + " is deleted")
    this.adminService.deleteUser(id).subscribe(data => {
      console.log(data);
    });
  }
}
