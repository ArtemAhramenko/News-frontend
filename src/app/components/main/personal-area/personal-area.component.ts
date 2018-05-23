import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {Article} from "../../../models/article";

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {

  user: User = new User();
  @Input() news: Article[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    if (this.userService.getCurrentUser() != null) {
      this.user = this.userService.getUserCred();
      this.news = this.userService.getUserCred().news;
    }
  }

}
