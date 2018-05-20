import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
  }

  showLoginForm() {
    this.router.navigate(["login"]);
  }

  showUser() {
    console.log("here")
    this.userservice.me().subscribe(data => {
      console.log("here");
      console.log(data);
    });
  }

}
