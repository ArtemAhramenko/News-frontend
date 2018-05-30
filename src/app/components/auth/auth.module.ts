import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {AuthComponent} from "./auth.component";
import {HeaderComponent} from "../main/header/header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  declarations: [LoginFormComponent, RegistrationFormComponent, HeaderComponent],
  exports: [AuthComponent]
})
export class AuthModule { }
