import {Article} from "../models/article";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from "../constants/API";
import {Injectable} from "@angular/core";

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {
  }
  private headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  create(id: String) {
    let url = API_URL + '/getarticleid/'+ id;
    return this.http.post(url, {header: this.headers});
  }

}
