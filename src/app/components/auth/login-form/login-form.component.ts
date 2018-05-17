import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userForm: FormGroup;
  user: User = new User();
  invalid = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
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
    this.userForm.controls['username'].clearValidators();
    this.userForm.controls['username'].setValue("");
    this.userForm.controls['password'].clearValidators();
    this.userForm.controls['password'].setValue("");
  }
}
