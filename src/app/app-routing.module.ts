import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  { path: '', redirectTo: '/film', pathMatch: 'full' },
  { path: 'film', component: FilmComponent },
  { path: 'detail/:id', component: FilmDetailComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }