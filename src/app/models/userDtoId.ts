import {User} from "./user";

export class UserDtoAlias {
  user: User;

  constructor(data) {
    this.user = data.user;
  }
}
