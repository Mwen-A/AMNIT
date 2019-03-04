import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

// Create the routes for the application
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'Home Page'
    }
  },
  {
    path: 'about',
    component: AboutPageComponent,
    data: {
      title: 'About Page'
    }
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      title: 'Contact Page'
    }
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: {
      title: 'The page was not found'
    }
  }
];

@NgModule({
  // Initialize the router module to use the routes list for the application
  imports: [RouterModule.forRoot(routes)],
  // Export the router module to be used in the main application
  exports: [RouterModule]
})
export class AppRoutingModule { }
