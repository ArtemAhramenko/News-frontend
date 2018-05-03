import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-area',
  templateUrl: './news-area.component.html',
  styleUrls: ['./news-area.component.css']
})
export class NewsAreaComponent implements OnInit {
  @Input() articleTitle;
  constructor() { }

  ngOnInit() {
  }

}
