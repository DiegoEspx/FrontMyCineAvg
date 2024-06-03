import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService} from '../series.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listar-serie',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './listar-serie.component.html',
  styleUrl: './listar-serie.component.css'
})

export class seriesListarComponent implements OnInit {
  series: Serie[] = [];

  constructor(private router: Router, private serieService: SerieService) {}

  ngOnInit(): void {
    this.obtenerSeries();
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
