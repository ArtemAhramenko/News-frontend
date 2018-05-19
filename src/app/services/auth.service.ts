import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {API_URL} from "../constants/API";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";
import {LoginResponse} from "../models/LoginResponse";
import {UserService} from "./user.service";
import * as jwt_decode from "jwt-decode";

@Injectable()
export class AuthService {

  private authHook = new Subject();

  constructor(private http: HttpClient, private userService: UserService) {
    window['authHook'] = this.authHook;
  }

  setAuthHook() {
    this.authHook.subscribe(authToken => {
      this.sendToken(authToken).subscribe( jwtToken =>
      this.saveToken(jwtToken))
    });
  }

  getDecodedAccessToken(token: string): any {
    try{
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

  saveToken(token: LoginResponse){
    localStorage.setItem('token', token.token);
    let user: User = new User();
    let tokenInfo = this.getDecodedAccessToken(token.token); // decode token
    console.log(tokenInfo);
    console.log(tokenInfo.userId);
    console.log(tokenInfo.roles);
    user.id = tokenInfo.userId;
    user.roles = tokenInfo.roles;
    console.log(user.id);
    console.log(user.roles);
  }

  authUser(user: User) {
    this.http.post(API_URL+'/auth', user).subscribe(data => {console.log(data)})
  }

  sendToken(token): Observable<any>{
    return this.http.post(API_URL+'/socialAuth', token);
  }

}
