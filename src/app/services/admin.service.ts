import { Injectable } from '@angular/core';
import {API_URL} from "../constants/API";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AdminService {


  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });


  constructor(private http: HttpClient, private usualRouter: Router) { }

  disableUser(id: number) {
    return this.http.post(API_URL + '/disableuser', id, {headers: this.headers});
  }

  deleteUser(id: number) {
    return this.http.post(API_URL + '/deleteuser', id, {headers: this.headers});
  }

  editNews(idNews: number) {
    return this.http.post(API_URL + '/getarticleid/' + idNews, {headers: this.headers});
  }
}
