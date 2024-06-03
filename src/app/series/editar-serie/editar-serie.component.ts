import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from '../series.service'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Serie } from '../serie';

@Component({
  selector: 'app-editar-serie',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './editar-serie.component.html',
  styleUrls: ['./editar-serie.component.css'] 
})
export class EditarSerieComponent implements OnInit {
  serieForm!: FormGroup;
  serie: Serie = new Serie(1, '', '', '', '', '','');
  id: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private serieService: SerieService,
    private router: Router 
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.serieService.detallesSerie(parseInt(this.id)).subscribe((ve: any) => {
      this.serie = ve;
      this.initForm();
    });
  }

  initForm() {
    this.serieForm = this.formBuilder.group({
      nombreSerie: [this.serie.nombreSerie, [Validators.required, Validators.minLength(3)]],
      duracion: [this.serie.duracion, [Validators.required, Validators.minLength(2)]],
      genero: [this.serie.genero, [Validators.required]],
      fechaEstreno: [this.serie.fechaEstreno, [Validators.required, Validators.minLength(4)]],
      pais: [this.serie.pais, [Validators.required, Validators.minLength(4)]],
      img: [this.serie.img, [Validators.required, Validators.minLength(4)]],
    });
  }

  actualizarSerie(): void {
    if (this.serieForm.valid) {
      const updatedSerie = { ...this.serie, ...this.serieForm.value };
      this.serieService.editarSerie(updatedSerie, this.serie.id).subscribe((vehi: any) => {
        alert('Registro actualizado con éxito');
        // Redirigir a otra página si es necesario
        this.router.navigate(['/listar-series']);
      },
      error => {
        console.error('Error al actualizar la serie:', error);
        alert('Error al actualizar la serie.');
      });
    }
  }

  eliminarSerie(): void {
    this.serieService.eliminarSerie(this.serie.id).subscribe(() => {
      alert('Serie eliminada con éxito');
      this.router.navigate(['/listar-series']);
    },
    error => {
      console.error('Error al eliminar la serie:', error);
      alert('Error al eliminar la serie.');
    });
  }
}
 