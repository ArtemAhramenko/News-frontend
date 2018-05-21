import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {Role} from "../../../models/role";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userForm: FormGroup;
  user: User = new User();
  role: Role = new Role();
  invalid = false;
  auth: boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private userService: UserService,) {
  }

  ngOnInit(): void {
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
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      'username': ['', [
        Validators.required
      ]],
      'password': ['', [
        Validators.required
      ]]
    })
  }

  login() {
    this.authService.authUser(this.user);
  }
}
