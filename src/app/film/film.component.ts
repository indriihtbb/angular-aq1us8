import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import {FilmService} from '../film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  constructor(private filmService : FilmService) { }

  films:Film[];
  isSelectedFilm = false;
  selectedFilm : Film;
  ngOnInit() {
    this.getFilm();
  }

  onSelectedFilm(film){
    this.isSelectedFilm=true;
    this.selectedFilm = film;

  }

  getFilm(){
    this.films = this.filmService.getFilm();
  }
}