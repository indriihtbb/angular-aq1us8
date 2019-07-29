import { Component, OnInit, Input } from '@angular/core';
import {Film} from '../film';
import {FilmService} from '../film.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor(
    private filmService : FilmService,
    private route: ActivatedRoute,
    private location: Location) { }

  film : Film;
  ngOnInit() {
    this.getDetailFilm()
  }

  getDetailFilm(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getDetailFilm(id)
      .subscribe(film => this.film = film);
  }

  goBack(){
    this.location.back();
  }
}