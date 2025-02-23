import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule)]
}).catch(err => console.error(err));
