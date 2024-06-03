import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../pelicula.service';  
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-crear-pelicula',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})

export class CrearPeliculaComponent implements OnInit {
  
  peliculaForm!: FormGroup;
  constructor(private formBuilder :FormBuilder,private peliculaService:PeliculaService, private router: Router){ }

  ngOnInit(): void{
    this.peliculaForm = this.formBuilder.group({
      nombrePelicula: ['', [Validators.required, Validators.minLength(3)]],
      duracion: ['', [Validators.required, Validators.minLength(3)]],
      genero: ['', [Validators.required, Validators.minLength(3)]],
      fechaEstreno:['', [Validators.required, Validators.minLength(4)]],
      pais:['', [Validators.required, Validators.minLength(4)]],
      img:['', [Validators.required, Validators.minLength(4)]],
    })

  }

  crearPelicula(pelicula: Pelicula): void {
    this.peliculaService.crearPelicula(pelicula).subscribe(
      (peliculaCreada) => {
        alert('Pelicula creada con éxito');
        this.peliculaForm.reset();
        this.router.navigate(['/listar-peliculas']);
      },
    );
  }

}
