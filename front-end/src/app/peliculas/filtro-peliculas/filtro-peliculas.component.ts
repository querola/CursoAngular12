import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
     private location : Location,
     private activatedRoute: ActivatedRoute) { }

  form: FormGroup

  generos =[
    { id: 1, nombre: 'Drama'},
    { id: 2, nombre: 'Accion'},
    { id: 3, nombre: 'Comedia'},
    { id: 4, nombre: 'Suspenso'}
  ];

  peliculas = [
    {titulo:'El increible hulk', enCines: false, proximosEstrenos: true, generos : [1,2], poster:'https://www.filmaboutit.com/data/shp/images/p4NYZXVtgKf6aiH65QzzkUVJcsd.jpg'},
    {titulo:'Spiderman', enCines: true, proximosEstrenos: true, generos : [3], poster:'https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/AcjaXqwZzggGiKLFdEfHMp0H.png'},
    {titulo:'interestelar', enCines: false, proximosEstrenos: false, generos : [4], poster:'https://m.media-amazon.com/images/I/91vmAIK3d5L._AC_SL1500_.jpg'}
  ]
  
  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);
    this.form.valueChanges
      .subscribe(valores => {
        this.peliculas = this.peliculasOriginal;
        this.buscarPeliculas(valores);
        this.escribirParametrosBusquedaEnURL();
      })
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((paramas) =>{
      var objeto: any = {};

      if(paramas.titulo){
        objeto.titulo = paramas.titulo;
      }
      if(paramas.generoId){
        objeto.generoId = Number(paramas.generoId);
      }
      
      if(paramas.enCines){
        objeto.enCines = paramas.enCines;
      }

      this.form.patchValue(objeto);
    }
    )
  }
  private escribirParametrosBusquedaEnURL(){
    var queryString = [];

    var valoresFormulario = this.form.value;

    if (valoresFormulario.titulo){
      queryString.push(`titulo=${valoresFormulario.titulo}`)
    }
    if (valoresFormulario.generoId){
      queryString.push(`generoId=${valoresFormulario.generoId}`)
    }
    if (valoresFormulario.proximosEstrenos){
      queryString.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`)
    }
    if (valoresFormulario.enCines){
      queryString.push(`enCines=${valoresFormulario.enCines}`)
    }

    this.location.replaceState('peliculas/buscar', queryString.join('&'));
  }
  buscarPeliculas(valores: any){
    if (valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);

    }
    
    if (valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }
    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }
  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }
}
