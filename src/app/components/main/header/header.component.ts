import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from "../../../services/user.service";
import {Article} from "../../../models/article";
import {User} from "../../../models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private usualRouter: Router, private router: ActivatedRoute, private userservice: UserService) { }

  ngOnInit() {
  }

  showLoginForm() {
    this.usualRouter.navigate(["login"]);
  }

  showUser() {
    console.log("call service")
    this.userservice.me(this.user).subscribe(data => {
      this.usualRouter.navigate(["me"]);
    });
  }

}
