import { Injectable } from '@angular/core';
import { MockFilms } from './mock-films';
import { Film } from './film';

@Injectable()
export class FilmService {

  constructor() { }

  getFilm() : Film[]{
    return MockFilms;
  }
}