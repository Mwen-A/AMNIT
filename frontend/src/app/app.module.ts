import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TeamService } from './team.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { TopContainerComponent } from './home-page/top-container/top-container.component';
import { WhoAreWeComponent } from './home-page/who-are-we/who-are-we.component';
import { WhatWeDoComponent } from './home-page/what-we-do/what-we-do.component';
import { OurWorkComponent } from './home-page/our-work/our-work.component';
import { OurTeamComponent } from './home-page/our-team/our-team.component';
import { NewsletterComponent } from './home-page/newsletter/newsletter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    NavBarComponent,
    FooterComponent,
    TopContainerComponent,
    WhoAreWeComponent,
    WhatWeDoComponent,
    OurWorkComponent,
    OurTeamComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Import HttpClientModule to be able to use http requests
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule {}
