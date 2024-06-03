import { model } from "@angular/core";

export class Pelicula {
    id:number;
    nombrePelicula:string;
    duracion:string;
    genero:string;
    fechaEstreno:string;
    pais:string;
    img:string;


    public constructor(id:number,nombrePelicula:string,duracion:string,genero:string,fechaEstreno:string,pais:string,img:string){
        this.id=id;
        this.nombrePelicula=nombrePelicula;
        this.duracion=duracion;
        this.genero=genero;
        this.fechaEstreno=fechaEstreno;
        this.img=img;
        this.pais=pais;
        
    }
}