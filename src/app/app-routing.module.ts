import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {AuthComponent} from "./components/auth/auth.component";
import {RegistrationFormComponent} from "./components/auth/registration-form/registration-form.component";
import {ArticleComponent} from './components/main/article/article.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: MainComponent},
  {path: 'login', component: AuthComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'article1', component: ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
