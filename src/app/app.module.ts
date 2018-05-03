import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';

import { NewsAreaComponent } from './components/main/news-area/news-area.component';
import {HeaderComponent} from "./components/main/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    AppComponent,
    NewsAreaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
