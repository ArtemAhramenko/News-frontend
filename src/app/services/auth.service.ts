import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {API_URL} from "../constants/API";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";
import {LoginResponse} from "../models/LoginResponse";
import {UserService} from "./user.service";
import {Router} from "@angular/router";
import * as jwt_decode from "jwt-decode";

@Injectable()
export class AuthService {

  user: User = new User();

  private authHook = new Subject();

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {
    window['authHook'] = this.authHook;
  }

  setAuthHook() {
    this.authHook.subscribe(authToken => {
      this.sendToken(authToken).subscribe(jwtToken =>
        this.saveToken(jwtToken))
    });
  }


  static getDecodedAccessToken(token: string): any {
    try{
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

  saveToken(token){
    localStorage.setItem('token', token.token);
    let tokenInfo = AuthService.getDecodedAccessToken(token.token); // decode token
    this.user.id = tokenInfo.userId;
    this.user.roles = tokenInfo.roles;
    localStorage.setItem('roles', tokenInfo.roles);
    this.userService.saveUser(this.user);
  }

  authUser(user: User) {
    this.http.post(API_URL+'/auth', user).subscribe(authToken => {
      this.saveToken(authToken);
    })
  }

  sendToken(token): Observable<any>{
    return this.http.post(API_URL+'/socialAuth', token);
  }

}
