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
import {FormBuilder} from "@angular/forms";
import { ArticleComponent } from './components/main/article/article.component';
import {HttpClientModule} from '@angular/common/http';


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
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
