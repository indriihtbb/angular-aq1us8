import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmComponent } from './film/film.component';
import { FilmService } from './film.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FilmDetailComponent, FilmComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FilmService]
})
export class AppModule { }
