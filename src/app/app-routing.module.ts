import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {AuthComponent} from "./components/auth/auth.component";
import {RegistrationFormComponent} from "./components/auth/registration-form/registration-form.component";
import {ArticleComponent} from './components/main/article/article.component';
import {CheckComponent} from './components/main/check/check.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: MainComponent},
  {path: 'login', component: AuthComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'article/:id', component: ArticleComponent, pathMatch: 'full'},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'check', component: CheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
