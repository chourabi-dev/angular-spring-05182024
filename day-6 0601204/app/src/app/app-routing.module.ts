import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AddEmployeePageComponent } from './views/add-employee-page/add-employee-page.component';
import { UsersPageComponent } from './views/users-page/users-page.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomePageComponent },
  { path:'add-employee', component:AddEmployeePageComponent },
  { path:'users', component:UsersPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
