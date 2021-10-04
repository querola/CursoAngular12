import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas = [
        this.peliculas = {
          titulo: 'spider Man',
          fechaLanzamiento: new Date(),
          precio: 1244.99
        },
        this.peliculas = {
          titulo: 'Thor',
          fechaLanzamiento: new Date(),
          precio: 1099.99
        }]
    }, 1000);
    throw new Error('Method not implemented.');
  }
  title = 'el valor que yo quiera';

  peliculas;

  duplicarNumero(valor: number): number{
    return valor * 2;
  }
}
