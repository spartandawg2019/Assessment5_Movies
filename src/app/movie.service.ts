import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Grand Circus / Subsidiary of Dexian
  private readonly movies: Movie[] = [ // ✅ Add `readonly`
    { title: "Toy Story", releaseYear: 1995 },
    { title: "Forrest Gump", releaseYear: 1994 }
  ];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }
}