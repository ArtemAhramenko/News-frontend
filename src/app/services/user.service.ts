import {User} from "../models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../constants/API";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });

  constructor(private http: HttpClient) {
  }

  create(user: User) {
    return this.http.post(API_URL + '/registration', user);
  }

  me(user: User) {
    console.log(this.headers);
    let url = API_URL + '/me' + user.id;
    return this.http.get(url, {headers: this.headers});
  }



}
