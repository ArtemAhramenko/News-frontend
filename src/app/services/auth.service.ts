import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {API_URL} from "../constants/API";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";
import {LoginResponse} from "../models/LoginResponse";


@Injectable()
export class AuthService {

  private authHook = new Subject();

  constructor(private http: HttpClient) {
    window['authHook'] = this.authHook;
  }

  setAuthHook() {
    this.authHook.subscribe(authToken => {

      this.sendToken(authToken).subscribe( jwtToken =>
      this.saveToken(jwtToken))
    });
  }

  saveToken(token: LoginResponse){
    localStorage.setItem('token', token.token);
  }



  authUser(user: User) {
    this.http.post(API_URL+'/auth', user).subscribe(data => {console.log(data)})
  }

  sendToken(token): Observable<any>{
    return this.http.post(API_URL+'/socialAuth', token);
  }

}
