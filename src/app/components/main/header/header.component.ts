import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from "../../../services/user.service";
import {Article} from "../../../models/article";
import {User} from "../../../models/user";
import {MainComponent} from "../main.component";
import {Role} from "../../../models/role";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User = new User();
  auth: boolean = false;
  role: Role = new Role();
  constructor(private usualRouter: Router, private router: ActivatedRoute, private userService: UserService) { }

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

  }

  showLoginForm() {
    this.usualRouter.navigate(["login"]);
  }

  showUser() {
    console.log("call service")
    this.userService.me(this.user).subscribe(data => {
      this.usualRouter.navigate(["me"]);
    });
  }

  exit() {
    localStorage.clear();
    this.usualRouter.navigate([MainComponent]);
  }

}
