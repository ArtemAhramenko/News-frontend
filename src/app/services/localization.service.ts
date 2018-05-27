import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LocalizationService {
  constructor(public localize: TranslateService){
    localize.addLangs(['ru', 'by']);
    localize.setDefaultLang('ru');

    if(localStorage.getItem('lang')){
      localize.use(localStorage.getItem('lang'));
    }else {
      const browserLang = localize.getBrowserLang();
      localize.use(browserLang.match(/ru|by/)?browserLang : 'ru');
    }
  }

}
