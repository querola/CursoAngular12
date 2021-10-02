import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'el valor que yo quiera';

  pelicula = {
    titulo: 'spider Man',
    fechaLanzamiento: new Date(),
    precio: 1244.99
  };

  duplicarNumero(valor: number): number{
    return valor * 2;
  }
}
