import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../constants/API';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {

  constructor(private http: HttpClient){

  }

  getArticles() {
    // return this.http.get(API_URL + '/getarticle').map(res => res.json().results as );
  }

}
