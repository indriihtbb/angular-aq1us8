import { Component, OnInit } from '@angular/core';
import {Film} from './film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor() { }

  film : Film = {
    id:1,
    title:'Avengers: Endgame',
    rate:8.7
  };
  ngOnInit() {
  }

}