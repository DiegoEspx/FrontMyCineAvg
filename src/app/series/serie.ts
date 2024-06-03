import { model } from "@angular/core";

export class Serie { 
    nombreSerie:string;
    duracion:string;
    genero:string;
    fechaEstreno:string;
    pais:string;
    id:number;
    img:string;


    public constructor(id:number,nombreSerie:string,duarcion:string,genero:string,fechaEstreno:string,pais:string,img:string){
        this.id=id;
        this.nombreSerie=nombreSerie;
        this.duracion=duarcion;
        this.genero=genero;
        this.fechaEstreno=fechaEstreno;
        this.img=img;
        this.pais=pais;

    }
}