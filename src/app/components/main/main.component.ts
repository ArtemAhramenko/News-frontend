import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from '../../constants/API';
import {Article} from '../../models/article';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  articles: Article[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(API_URL + '/getarticle').subscribe(
      (news: Article[]) => {
        this.articles = news;
        console.log(news);
      }
    );

  }
}
