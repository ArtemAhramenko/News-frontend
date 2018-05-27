import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LocalizationService} from '../../../services/localization.service';

@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.css']
})
export class LocalizationComponent implements OnInit {

  public translate: TranslateService;
  constructor(private localizate: LocalizationService) {
    this.translate = localizate.localize;
  }

  ngOnInit() {
  }

  changeLang(lang){
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

}
