import {Component, Input, OnInit, Output} from '@angular/core';
import {Article} from '../../../models/article';
import {ArticleService} from '../../../services/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() article;
  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
  }
}
