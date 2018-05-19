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

  me() {
    console.log(this.headers);
    return this.http.get(API_URL + '/me', {headers: this.headers});
  }



}
