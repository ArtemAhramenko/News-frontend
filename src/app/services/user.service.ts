import {User} from "../models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../constants/API";
import {Injectable} from "@angular/core";
import {selectUser} from "../models/selectUser";

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
    localStorage.setItem('selectedUserId', JSON.stringify(id));
    return this.http.get(url, {headers: this.headers});
  }

  selectPeople(id: number) {
    let url = API_URL + '/selectedUser' + '/' + id;
    this.http.get(url, {headers: this.headers});
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

  selectedUser(selectedUser: selectUser) {
    localStorage.setItem('selectedUser', JSON.stringify(selectedUser));
  }

  getSelectedUser(): selectUser {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem('selectedUser'))
    }
  }

  getCurrentUser(): User {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem('user'))
    }
  }

  getAllUsers()   {
    let url = API_URL + '/getuser';
    return this.http.get(url, {headers: this.headers});
  }

  checkProfile(name: string) {
    let url = API_URL + '/getUserByUsername';
    return this.http.post(url, name, {headers: this.headers});
  }

}
