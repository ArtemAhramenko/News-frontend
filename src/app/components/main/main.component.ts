import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  articles = [
    {text: 'Test1'},
    {text: 'Test2'},
    {text: 'Test3'},
    {text: 'Test4'},
    {text: 'Test5'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
