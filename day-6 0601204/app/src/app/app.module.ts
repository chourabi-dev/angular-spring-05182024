import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AddEmployeePageComponent } from './views/add-employee-page/add-employee-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromiseTestComponent } from './elements/promise-test/promise-test.component';
import { ObsevableTestComponent } from './elements/obsevable-test/obsevable-test.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersPageComponent } from './views/users-page/users-page.component'


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddEmployeePageComponent,
    PromiseTestComponent,
    ObsevableTestComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
