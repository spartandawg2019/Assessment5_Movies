import { Component } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Ensure this is present
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MovieListComponent]  //  Import MovieListComponent
})
export class AppComponent {
  title = 'movie-app';
}