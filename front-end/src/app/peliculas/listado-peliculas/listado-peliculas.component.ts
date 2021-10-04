import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }
  peliculas;
  ngOnInit(): void {
    this.peliculas = [{
        titulo: 'spider Man -- far from home',
        fechaLanzamiento: new Date(),
        precio: 1244.99
      },
      this.peliculas = {
        titulo: 'Thor',
        fechaLanzamiento: new Date(),
        precio: 1099.99
      }]
  }

}
