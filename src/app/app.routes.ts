import { Routes } from '@angular/router';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { PeliculasListarComponent } from './peliculas/listar-pelicula/listar-pelicula.component';
import { CrearSerieComponent } from './series/crear-serie/crear-serie.component';
import { EditarSerieComponent } from './series/editar-serie/editar-serie.component';
import { seriesListarComponent } from './series/listar-serie/listar-serie.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'crear-pelicula', component: CrearPeliculaComponent },
  { path: 'editar-pelicula/:id', component: EditarPeliculaComponent },
  { path: 'listar-peliculas', component: PeliculasListarComponent },
  { path: 'crear-serie', component: CrearSerieComponent },
  { path: 'editar-serie/:id', component: EditarSerieComponent },
  { path: 'listar-series', component: seriesListarComponent },
  { path: 'home', component: HomeComponent }
];
