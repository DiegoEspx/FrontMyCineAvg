import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../pelicula.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-peliculas-listar',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './listar-pelicula.component.html',
  styleUrls: ['./listar-pelicula.component.css']
})
export class PeliculasListarComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private router: Router, private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.obtenerPeliculas();
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
}
