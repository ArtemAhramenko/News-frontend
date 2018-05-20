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
import { HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {ArticleService} from './services/article.service';
import { ListComponent } from './components/main/list/list.component';
import { CheckComponent } from './components/main/check/check.component';
import { TagComponent } from './components/main/tag/tag.component';

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
    CheckComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
