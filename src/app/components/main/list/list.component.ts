import {Component, Input, OnInit} from '@angular/core';
import {API_URL} from '../../../constants/API';
import {Article} from '../../../models/article';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() popularList;
  constructor() { }

  ngOnInit() {
  }

}
