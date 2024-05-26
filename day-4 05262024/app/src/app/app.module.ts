import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SinginPageComponent } from './views/singin-page/singin-page.component';
import { TodoAppComponent } from './views/todo-app/todo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    SinginPageComponent,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
