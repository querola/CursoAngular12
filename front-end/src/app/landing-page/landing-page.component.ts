import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
    this.peliculasEnCines = [
      {
        titulo: 'spider Man',
        fechaLanzamiento: new Date(),
        precio: 1244.99,
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/811CP3gzbPL.jpg',
      },
      {
        titulo: 'Thor',
        fechaLanzamiento: new Date(),
        precio: 1099.99,
        poster: 'https://m.media-amazon.com/images/I/61+bj6-zqXL._AC_.jpg',
      }];
  }
  peliculasEnCines;
  peliculasProximosEstrenos = [];
}
