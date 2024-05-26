import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginPageComponent } from './views/singin-page/singin-page.component';
import { TodoAppComponent } from './views/todo-app/todo-app.component';

const routes: Routes = [
  { path:'auth', component:SinginPageComponent },
  { path:'todo', component:TodoAppComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
