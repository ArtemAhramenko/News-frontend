import {Article} from "../models/article";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from "../constants/API";
import {Injectable} from "@angular/core";
import {ArticleCreate} from '../models/articleCreate';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';
import {Rating} from '../models/rating';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  private headersAuth: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });

  getArticleId(id: String) {
    let url = API_URL + '/getarticleid/'+ id;
    return this.http.post(url,  {headers: this.headers});
  }

  create() {
    return this.http.get(API_URL + '/create',  {headers: this.headersAuth});
  }

  createArticle(article: ArticleCreate) : Observable<any>{
    let url = API_URL + '/addarticle';
    console.log(article);
    return this.http.post(url, article, {headers: this.headersAuth});
  }

  addRating(rating: Rating) : Observable<any>{
    let url = API_URL + '/addrating';
    console.log(rating);
    return this.http.post(url, rating, {headers: this.headersAuth});
  }


  getSection(id: number){
    let url = API_URL + '/getsection/'+ id;
    return this.http.post(url,  {headers: this.headers});
  }
}
