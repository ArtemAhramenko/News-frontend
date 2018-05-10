import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  userForm: FormGroup;
  user: User = new User();
  invalid = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      'username': ['', [
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
        console.log(data);
        this.router.navigate(['/login'])
      }
    );
  }

}
