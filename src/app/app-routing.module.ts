import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {AuthComponent} from "./components/auth/auth.component";
import {RegistrationFormComponent} from "./components/auth/registration-form/registration-form.component";
import {ArticleComponent} from './components/main/article/article.component';
import {CreateArticleComponent} from './components/main/create-article/create-article.component';
import {PersonalAreaComponent} from "./components/main/personal-area/personal-area.component";
import {SportComponent} from './components/main/sport/sport.component';
import {PoliticsComponent} from './components/main/politics/politics.component';
import {PeopleComponent} from './components/main/people/people.component';
import {TechnologyComponent} from './components/main/technology/technology.component';
import {SelectedUserComponent} from "./components/main/selected-user/selected-user.component";


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: MainComponent},
  {path: 'login', component: AuthComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'article/:id', component: ArticleComponent, pathMatch: 'full'},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'create', component: CreateArticleComponent},
  {path: 'sport', component: SportComponent},
  {path: 'politics', component: PoliticsComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'technology', component: TechnologyComponent},
  {path: 'me/:id', component: PersonalAreaComponent},
  {path: 'selectedUser/:id', component: SelectedUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
