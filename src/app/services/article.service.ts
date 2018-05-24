import {Article} from "../models/article";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from "../constants/API";
import {Injectable} from "@angular/core";
import {ArticleCreate} from '../models/articleCreate';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';

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
    return this.http.post(url, article, {headers: this.headersAuth});
  }

}
