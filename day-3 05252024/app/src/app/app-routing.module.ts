import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { ProfilePageComponent } from './views/profile-page/profile-page.component';
import { OurCompanyComponent } from './views/our-company/our-company.component';
import { OurTeamComponent } from './views/our-team/our-team.component';
import { TeamMemberDetailsComponent } from './views/team-member-details/team-member-details.component';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './views/error/error.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomePageComponent }, 

  { path:'about', component:AboutPageComponent, children:[
    { path:'company', component:OurCompanyComponent },
    { path:'team', component:OurTeamComponent }
  ] },

  { path:'team-member-details/:id', component:TeamMemberDetailsComponent },
  { path:'profile', component:ProfilePageComponent, canActivate:[ AuthGuard ]   },


  // wild card
  { path:'**', component:ErrorComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
