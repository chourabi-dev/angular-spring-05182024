import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { ProfilePageComponent } from './views/profile-page/profile-page.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { OurCompanyComponent } from './views/our-company/our-company.component';
import { OurTeamComponent } from './views/our-team/our-team.component';
import { TeamMemberDetailsComponent } from './views/team-member-details/team-member-details.component';
import { ErrorComponent } from './views/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ProfilePageComponent,
    NavbarComponent,
    OurCompanyComponent,
    OurTeamComponent,
    TeamMemberDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
