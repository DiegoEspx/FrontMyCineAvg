import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Pelicula } from './pelicula';

const API_URL='https://mycineavg-diego-guerrero.onrender.com/api/peliculas/'

@Injectable({
    providedIn: 'root'
})
export class PeliculaService {

constructor(private http:HttpClient) { }
    obtenerPeliculas():Observable<Pelicula[]>{
        return this.http.get<Pelicula[]>(API_URL+'peliculas/',);
    }
    crearPelicula(pelicula:Pelicula):Observable<Pelicula>{
        return this.http.post<Pelicula>(API_URL+'crear-pelicula/', pelicula)
        }
    detallesPelicula(id:Number):Observable<Pelicula>{
        return this.http.get<Pelicula>(API_URL+'pelicula/'+id);
        }
    editarPelicula(pelicula: Pelicula, id: number): Observable<Pelicula> {
        return this.http.put<Pelicula>(API_URL + `editar-pelicula/${id}/`, pelicula);
        }
    eliminarPelicula(id: number): Observable<void> {
        return this.http.delete<void>(API_URL + 'eliminar-pelicula/' + id);
    }
}
