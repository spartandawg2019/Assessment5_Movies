import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';  //  No extra folders
import { MovieService } from '../movie.service';  //  No extra folders

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }
}
