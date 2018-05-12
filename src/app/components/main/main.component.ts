import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ArticlesService} from '../../services/articles.service';
import {API_URL} from '../../constants/API';
import {Articles} from '../../models/articles';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  articles: Articles[];

  // articles = [
  //   {text: 'Test1'},
  //   {text: 'Test2'},
  //   {text: 'Test3'},
  //   {text: 'Test4'},
  //   {text: 'Test5'}
  // ];

  constructor(private http: HttpClient, private articlesService: ArticlesService) { }

  ngOnInit() {
  }

  // get() {
  //   // this.http.get(API_URL + '/admin/delete').map(response => response.articles);
  //   this.http.get(API_URL + '/getarticle').toPromise().then(res => {this.articles = res.json().articles.map(Articles =>{return new SearchItem})}).subscribe(
  //     data => {
  //       this.articles = data;
  //     }
  //   );
  // }

}
