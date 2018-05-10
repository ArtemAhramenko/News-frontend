import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../constants/API";
import {Injectable} from "@angular/core";


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  create(user: User) {
    return this.http.post(API_URL + '/registration', user);
  }

}
