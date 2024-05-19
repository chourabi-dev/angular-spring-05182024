import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { SidmenuComponent } from './elements/sidmenu/sidmenu.component';
import { FooterComponent } from './elements/footer/footer.component';
import { ArticleComponent } from './elements/article/article.component';
import { EmailPipe } from './email.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidmenuComponent,
    FooterComponent,
    ArticleComponent,
    EmailPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
