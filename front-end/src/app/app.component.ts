import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [{
          titulo: 'spider Man',
          fechaLanzamiento: new Date(),
          precio: 1244.99
        },
        {
          titulo: 'Thor',
          fechaLanzamiento: new Date(),
          precio: 1099.99
        }]
    }, 3000);
    throw new Error('Method not implemented.');
  }
  title = 'el valor que yo quiera';

  peliculasEnCines;
  peliculasProximosEstrenos = [];

  duplicarNumero(valor: number): number{
    return valor * 2;
  }

  manejarRated(voto: number):void{
    alert(voto);
  }
}
