import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../peliculas/pelicula';
import { PeliculaService } from '../peliculas/pelicula.service';
import { Serie } from '../series/serie';
import { SerieService} from '../series/series.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'Listar Contenido',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peliculas: Pelicula[] = [];
  series: Serie[] = [];

  constructor(private router: Router, private peliculaService: PeliculaService, private serieService: SerieService ) {}

  ngOnInit(): void {
    this.obtenerPeliculas();
    this.obtenerSeries();
  }

  obtenerPeliculas() {
    this.peliculaService.obtenerPeliculas().subscribe(
      peliculas => {
        this.peliculas = peliculas;
      },
      error => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }
  

  editarPelicula(id: number) {
    this.router.navigate(['/editar-pelicula', id]);
  }
  obtenerSeries() {
    this.serieService.obtenerSeries().subscribe(
      series => {
        this.series = series;
      },
      error => {
        console.error('Error al obtener las series', error);
      }
    );
  }

  editarSerie(id: number) {
    this.router.navigate(['/editar-serie', id]);
  }
}
