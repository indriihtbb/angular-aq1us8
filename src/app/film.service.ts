import { Injectable } from '@angular/core';
import { MockFilms } from './mock-films';
import { Film } from './film';
import { Observable, of } from 'rxjs';

@Injectable()
export class FilmService {

  constructor() { }

  getFilm() : Observable<Film[]>{
    return of(MockFilms);
  }

  getDetailFilm(id: number): Observable<Film> {
  return of(MockFilms.find(film => film.id === id));
}
}