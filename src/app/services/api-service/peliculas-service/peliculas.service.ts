import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  //URL BASE

  urlBase: string ='https://api.themoviedb.org/3/'
  
  //API KEY 

  api_key: string= '?api_key=be83012a3b3f4f591240034020b0d76e&language=es-ES'; 

  //URL PARA LAS PELICULAS

  urlBasePelicula: string = "https://api.themoviedb.org/3/movie/";

  urlSearchPelicula: string="https://api.themoviedb.org/3/search/movie";

  constructor(private http: HttpClient) {}; 


  //GET DE PELICULAS POR --id, palabra, titulo, similitud

  getPeliculas_PorPalabraHttp (ingreso:string, pag:number): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlSearchPelicula}${this.api_key}&query=${ingreso}&page=${pag}`); 
  }

  getPelicula_PorIdHttp (id:string) : Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBasePelicula}${id}${this.api_key}`);
  }

  getPeliculas_RecomendacionesHttp (id:string): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBasePelicula}/${id}/recommendations${this.api_key}`); 
  }

  getPeliculas_PorPalabrayAñoHttp (ingreso:string, año:string): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlSearchPelicula}${this.api_key}&query=${ingreso}&primary_release_year=${año}`); 
  }
  
  getPeliculas_GeneroHttp(idGenero: number, pag:number): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/discover/movie${this.api_key}&with_genres=${idGenero}&page=${pag}`); 
  }

  //GET DE PELICULAS TRENDING DEL DIA/SEMANA

  getPeliculas_TrendingWeekHttp(): Observable<any[]>
  {
    return this.http.get<any[]>("https://api.themoviedb.org/3/trending/movie/week" + this.api_key); 
  }

  getPeliculas_TrendingDayHttp(): Observable<any[]>
  {
    return this.http.get<any[]>("https://api.themoviedb.org/3/trending/movie/day" + this.api_key); 
  }

  //GET MEJORES PUNTUADOS 

  getPeliculas_MejorPuntuacion(): Observable<any[]>
  {
    return this.http.get<any[]>("https://api.themoviedb.org/3/movie/top_rated" + this.api_key); 
  }

  //GET NOMBRE DE GENERO SEGUN ID 

  getListaGeneros_Http(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlBase}/genre/movie/list${this.api_key}`); 
  }
}
