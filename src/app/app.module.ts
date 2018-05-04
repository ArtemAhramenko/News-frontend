import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { NewsAreaComponent } from "./components/main/news-area/news-area.component";
import { LoginFormComponent } from './components/auth/login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsAreaComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
