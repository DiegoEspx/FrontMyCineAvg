import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../serie';
import { SerieService } from '../series.service';  
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-crear-serie',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './crear-serie.component.html',
  styleUrl: './crear-serie.component.css'
})
export class CrearSerieComponent implements OnInit {
  
  serieForm!: FormGroup;
  constructor(private formBuilder :FormBuilder,private serieService:SerieService, private router: Router){ }

  ngOnInit(): void{
    this.serieForm = this.formBuilder.group({
      nombreSerie: ['', [Validators.required, Validators.minLength(3)]],
      duracion: ['', [Validators.required, Validators.minLength(3)]],
      genero: ['', [Validators.required, Validators.minLength(3)]],
      fechaEstreno:['', [Validators.required, Validators.minLength(4)]],
      pais:['', [Validators.required, Validators.minLength(4)]],
      img:['', [Validators.required, Validators.minLength(4)]],

    })

  }

  crearSerie(serie: Serie): void {
    this.serieService.crearSerie(serie).subscribe(
      (serieCreada) => {
        alert('serie creada con éxito');
        this.serieForm.reset();
        this.router.navigate(['/listar-series']);
      },
    );
  }

}
