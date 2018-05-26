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

  me(id: number) {
    let url = API_URL + '/me' + '/' + id;
    return this.http.get(url, {headers: this.headers});
  }

  sendChanges(user: User) {
    let url = API_URL + '/changeMe';
    return this.http.post(url, user,{headers: this.headers});
  }

  saveUser(user: User) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  saveUserCred(user: User) {
    if (user) {
      localStorage.setItem('userCred', JSON.stringify(user));
    }
  }

  getUserCred(): User {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem('userCred'))
    }
  }

  getCurrentUser(): User {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem('user'))
    }
  }

  getAllUsers()   {
    let url = API_URL + '/getAllUsers';
    return this.http.get(url, {headers: this.headers});
  }

  checkProfile(name: string) {
    let url = API_URL + '/getUserByUsername';
    return this.http.post(url, name, {headers: this.headers});
  }

}
