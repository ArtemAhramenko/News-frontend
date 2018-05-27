import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {Role} from "../../../models/role";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  userForm: FormGroup;
  user: User = new User();
  role: Role = new Role();
  invalid = false;
  auth: boolean;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService) {
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
      'alias': ['', [
        Validators.required
      ]],
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'password': ['', [
        Validators.required
      ]]
    })
  }

  register() {
    if (!this.userForm.valid) {
      this.invalid = true;
      return;
    }
    this.userService.create(this.user).subscribe(
      data => {
        this.router.navigate(['/login'])
      },
      error => {
        if (error.status === 500) {
          alert({
            severity: 'error', summary: 'Error',
            detail: 'Пользователь с таким именем уже зарегестрирован'
          })
        }
      }
    );
  }

}
