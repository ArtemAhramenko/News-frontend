import {Role} from "./role";
import {Article} from "./article";
import {Section} from './section';

export class User {
    id: number;
    username: string;
    alias: string;
    email: string;
    password: string;
    roles: Array<Role>;
    confirmationToken: string;
    banned: boolean;
    enabled: boolean;
  // token: string;
    profileImg: string;
    news: Array<Article>

  constructor() {

  }

}
