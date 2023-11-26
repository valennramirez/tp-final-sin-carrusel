import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/api-service/peliculas-service/peliculas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private peliculaService: PeliculasService){}

  ngOnInit() { 
    this.setListados(); 
  }

  basePoster: string='https://image.tmdb.org/t/p/w500'; 

  //trending
  listadoTrendingDay: any=[]; 
  listadoTrendingWeek: any=[]; 

  //generos
  listadoAccion: any=[]; 
  listadoRomance: any=[]; 
  listadoCienciaFiccion: any=[]; 
  listadoDrama: any=[]; 
  listadoMisterio: any=[]; 
  listadoComedia: any=[]; 
  listadoFantasia:any=[];
  listadoHorror:any=[]; 
  listadoFamiliar:any=[];
  listadoThriller:any=[];
  listadoAventura:any=[];
  listadoCrimen:any=[];
  listadoDocumental:any=[];
  listadoAnimacion:any=[]; 
  listadoMejoresPuntuados:any=[]; 

  //agregar las listas de peliculas que devuelve cada get del service 
  setListados(){

    this.peliculaService.getPeliculas_GeneroHttp(28, 1).subscribe({
      next: (pe) => {
        this.listadoAccion= pe;
        this.listadoAccion=this.listadoAccion.results.slice(0, 5);  
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(10749, 1).subscribe({
      next: (pe) => {
        this.listadoRomance= pe; 
        this.listadoRomance=this.listadoRomance.results.slice(0, 5);  
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(878, 1).subscribe({
      next: (pe) => {
        this.listadoCienciaFiccion= pe; 
        this.listadoCienciaFiccion=this.listadoCienciaFiccion.results.slice(0, 5);  
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(18, 1).subscribe({
      next: (pe) => {
        this.listadoDrama= pe; 
        this.listadoDrama=this.listadoDrama.results.slice(0, 5);  
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(9648, 1).subscribe({
      next: (pe) => {
        this.listadoMisterio= pe; 
        this.listadoMisterio=this.listadoMisterio.results.slice(0, 5);  
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(35, 1).subscribe({
      next: (pe) => {
        this.listadoComedia= pe; 
        this.listadoComedia=this.listadoComedia.results.slice(0, 5);  
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(14, 1).subscribe({
      next: (pe) => {
        this.listadoFantasia= pe; 
        this.listadoFantasia=this.listadoFantasia.results.slice(0, 5);  
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(27, 1).subscribe({
      next: (pe) => {
        this.listadoHorror= pe; 
        this.listadoHorror=this.listadoHorror.results.slice(0, 5);  
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(10751, 1).subscribe({
      next: (pe) => {
        this.listadoFamiliar= pe; 
        this.listadoFamiliar=this.listadoFamiliar.results.slice(0, 5);  
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(53, 1).subscribe({
      next: (pe) => {
        this.listadoThriller= pe;
        this.listadoThriller=this.listadoThriller.results.slice(0, 5);  
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(12, 1).subscribe({
      next: (pe) => {
        this.listadoAventura= pe; 
        this.listadoAventura=this.listadoAventura.results.slice(0, 5); 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(80, 1).subscribe({
      next: (pe) => {
        this.listadoCrimen= pe; 
        this.listadoCrimen=this.listadoCrimen.results.slice(0, 5); 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(99, 1).subscribe({
      next: (pe) => {
        this.listadoDocumental= pe; 
        this.listadoDocumental=this.listadoDocumental.results.slice(0, 5); 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(16, 1).subscribe({
      next: (pe) => {
        this.listadoAnimacion= pe; 
        this.listadoAnimacion=this.listadoAnimacion.results.slice(0, 5); 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_TrendingDayHttp().subscribe({
      next: (pe) => {
        this.listadoTrendingDay= pe; 
        this.listadoTrendingDay=this.listadoTrendingDay.results.slice(0, 5); 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_TrendingWeekHttp().subscribe({
      next: (pe) => {
        this.listadoTrendingWeek= pe; 
        this.listadoTrendingWeek= this.listadoTrendingWeek.results.slice(0, 5); 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_MejorPuntuacion().subscribe({
      next: (pe) => {
        this.listadoMejoresPuntuados= pe; 
        this.listadoMejoresPuntuados= this.listadoMejoresPuntuados.results.slice(0, 5); 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })
  }

}
