import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component'; // ✅ Ensure this path is correct

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent  // ✅ Ensure this is correctly included
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // ✅ Ensure AppComponent is bootstrapped
})
export class AppModule { }