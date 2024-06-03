import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Serie } from './serie';

const API_URL='https://mycineavg-diego-guerrero.onrender.com/api/serie/'

@Injectable({
    providedIn: 'root'
})
export class SerieService {

constructor(private http:HttpClient) { }
    obtenerSeries():Observable<Serie[]>{
        return this.http.get<Serie[]>(API_URL+'series/',);
    }
    crearSerie(serie:Serie):Observable<Serie>{
        return this.http.post<Serie>(API_URL+'crear-serie/', serie)
        }
    detallesSerie(id:Number):Observable<Serie>{
        return this.http.get<Serie>(API_URL+'serie/'+id);
        }
    editarSerie(serie: Serie, id: number): Observable<Serie> {
        return this.http.put<Serie>(API_URL + `editar-serie/${id}/`, serie);
        }
    eliminarSerie(id: number): Observable<void> {
        return this.http.delete<void>(API_URL + 'eliminar-serie/' + id);
    }
}