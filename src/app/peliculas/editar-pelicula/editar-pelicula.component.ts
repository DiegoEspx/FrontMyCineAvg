import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../pelicula.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'editar-pelicula-app',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {
  peliculaForm!: FormGroup;
  pelicula: Pelicula = new Pelicula(1, '', '', '', '', '', '');
  id: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private peliculaService: PeliculaService,
    private router: Router 
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.peliculaService.detallesPelicula(parseInt(this.id)).subscribe((ve: any) => {
      this.pelicula = ve;
      this.initForm();
    });
  }

  initForm() {
    this.peliculaForm = this.formBuilder.group({
      nombrePelicula: [this.pelicula.nombrePelicula, [Validators.required, Validators.minLength(3)]],
      duracion: [this.pelicula.duracion, [Validators.required, Validators.minLength(2)]],
      genero: [this.pelicula.genero, [Validators.required]],
      fechaEstreno: [this.pelicula.fechaEstreno, [Validators.required, Validators.minLength(4)]],
      pais: [this.pelicula.pais, [Validators.required, Validators.minLength(4)]],
      img: [this.pelicula.img, [Validators.required, Validators.minLength(4)]],
    });
  }

  actualizarPelicula(): void {
    if (this.peliculaForm.valid) {
      const updatedPelicula = { ...this.pelicula, ...this.peliculaForm.value };
      this.peliculaService.editarPelicula(updatedPelicula, this.pelicula.id).subscribe((vehi: any) => {
        alert('Registro actualizado con éxito');
        // Redirigir a otra página si es necesario
        this.router.navigate(['/listar-peliculas']);
      },
      error => {
        console.error('Error al actualizar la película:', error);
        alert('Error al actualizar la película.');
      });
    }
  }

  eliminarPelicula(): void {
    this.peliculaService.eliminarPelicula(this.pelicula.id).subscribe(() => {
      alert('Pelicula eliminada con éxito');
      this.router.navigate(['/listar-peliculas']);
    },
    error => {
      console.error('Error al eliminar la película:', error);
      alert('Error al eliminar la película.');
    });
  }
}
