import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { CardComponent } from './components/main/card/card.component';
import { LoginFormComponent } from "./components/auth/login-form/login-form.component";
import { AuthComponent } from './components/auth/auth.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { PageHeadingComponent } from './components/main/page-heading/page-heading.component';
import { AuthFooterComponent } from './components/auth/auth-footer/auth-footer.component';
import { RegistrationFormComponent } from './components/auth/registration-form/registration-form.component';
import { ArticleComponent } from './components/main/article/article.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserService } from "./services/user.service";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthService} from "./services/auth.service";
import {ArticleService} from './services/article.service';
import { ListComponent } from './components/main/list/list.component';
import { CreateArticleComponent } from './components/main/create-article/create-article.component';
import { TagComponent } from './components/main/tag/tag.component';
import { QuillModule } from 'ngx-quill';
import { PersonalAreaComponent } from './components/main/personal-area/personal-area.component';
import { SportComponent } from './components/main/sport/sport.component';
import { PoliticsComponent } from './components/main/politics/politics.component';
import { PeopleComponent } from './components/main/people/people.component';
import { TechnologyComponent } from './components/main/technology/technology.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {SelectedUserComponent} from './components/main/selected-user/selected-user.component';
import {LocalizationService} from './services/localization.service';
import {AdminService} from './services/admin.service';
import {RatingModule} from 'ngx-rating'


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    LoginFormComponent,
    AuthComponent,
    MainComponent,
    FooterComponent,
    PageHeadingComponent,
    AuthFooterComponent,
    RegistrationFormComponent,
    ArticleComponent,
    ListComponent,
    CreateArticleComponent,
    TagComponent,
    PersonalAreaComponent,
    SportComponent,
    PoliticsComponent,
    PeopleComponent,
    TechnologyComponent,
    SelectedUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    HttpClientModule,
    RatingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [UserService, AuthService, ArticleService, LocalizationService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
