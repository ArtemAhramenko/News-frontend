import { Component, OnInit } from '@angular/core';
import {Article} from '../../../models/article';
import {API_URL} from '../../../constants/API';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  articles: Article[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(API_URL + '/getarticle').subscribe(
      (news: Article[]) => { this.articles = news }
    );
  }

}
