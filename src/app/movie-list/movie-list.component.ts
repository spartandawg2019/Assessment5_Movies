import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',  // ✅ Ensure this matches app.component.html
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = []; // No read only

  constructor(private readonly movieService: MovieService) {} // ✅ Keep `readonly` on `movieService`

  ngOnInit(): void {
    this.movies = this.movieService.getMovies(); // ✅ Now reassignment works
  }
}