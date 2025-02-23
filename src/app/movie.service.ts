import { Injectable } from '@angular/core';
import { Movie } from './movie';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    { title: 'Toy Story', releaseYear: 1995 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }
}
