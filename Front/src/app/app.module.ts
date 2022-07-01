import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { navBar } from './navBar';
import { login } from './login';
import { menu } from './Menu/menu';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    navBar,
    menu,
    login
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
