import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/api-service/peliculas-service/peliculas.service';
import { AutService } from 'src/app/services/user/aut.service';

@Component({
  selector: 'app-visualizar-peliculas-genero',
  templateUrl: './visualizar-peliculas-genero.component.html',
  styleUrls: ['./visualizar-peliculas-genero.component.css']
})
export class VisualizarPeliculasGeneroComponent implements OnInit {

  constructor(private peliculaService : PeliculasService, private router: ActivatedRoute, private autService: AutService) { }

  ngOnInit(): void {
    this.getId(); 
    this.setListado(); 
    this.getListaGeneros(); 
  }


  listaPeliculas: any=[]; 
  listadoGenero: any={}; 
  genero!: any; 
  id!:number; 
  pagina:number=1; 

  getId() 
  {
    this.router.params.subscribe( param => 
      {
        this.id=+param['id']; 
        
      })
  }

  getListaGeneros()
  {
    this.peliculaService.getListaGeneros_Http().subscribe({
      next: (pg) => {
        this.listadoGenero= pg; 
        console.log(pg);  

        this.genero=this.buscarGenero();
        console.log(this.genero) 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

  }

  buscarGenero()
  {
    return this.listadoGenero.genres.find((e:any) => 
    { 
      return e.id==this.id; 
    }); 

  }

  volverPagina()
  {
    this.pagina--; 
    this.setListado();
  }
  pasarPagina()
  {
    this.pagina++; 
    this.setListado();
  }
  setListado()
  {
    this.peliculaService.getPeliculas_GeneroHttp(this.id, this.pagina).subscribe({
      next: (pe) => {
        this.listaPeliculas= pe; 
        console.log(pe); 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

    this.peliculaService.getPeliculas_GeneroHttp(this.id, this.pagina+1).subscribe({
      next: (pe) => {
        this.listaPeliculas + pe;  
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })

  }

}
