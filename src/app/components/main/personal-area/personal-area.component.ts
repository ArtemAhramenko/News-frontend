import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {Article} from "../../../models/article";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
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
}
