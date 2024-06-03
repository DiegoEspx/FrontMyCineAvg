import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

editarPelicula(arg0: any) {
throw new Error('Method not implemented.');
}
editarSerie(arg0: any) {
throw new Error('Method not implemented.');
}


  title = 'MyCineAVG-Front';

}
