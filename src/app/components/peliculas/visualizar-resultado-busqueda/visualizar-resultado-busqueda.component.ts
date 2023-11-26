import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/api-service/peliculas-service/peliculas.service';

@Component({
  selector: 'app-visualizar-resultado-busqueda',
  templateUrl: './visualizar-resultado-busqueda.component.html',
  styleUrls: ['./visualizar-resultado-busqueda.component.css']
})
export class VisualizarResultadoBusquedaComponent implements OnInit{
  constructor(private peliculaService: PeliculasService, private route: ActivatedRoute, private formBuilder: FormBuilder){}


  ngOnInit(){
    this.initBusqueda(); 
    this.getIngreso(); 
    this.getResultadosBusqueda();
  }

  listadoBusqueda: any=[]; 
  ingreso:string=''; 
  año:string=''; 
  pagina: number=1;  

  formulario!: FormGroup; 


  initBusqueda()
  {
    this.formulario=this.formBuilder.group({
      anio: ''
    })
  }

  getIngreso() 
  {
    this.route.params.subscribe( param => 
      {
        this.ingreso=param['ingreso']; 
      })
  }

  volverPagina()
  {
    this.pagina--; 
    this.getResultadosBusqueda();
  }
  pasarPagina()
  {
    this.pagina++; 
    this.getResultadosBusqueda();
  }

  getResultadosBusqueda()
  {
    this.peliculaService.getPeliculas_PorPalabraHttp(this.ingreso, this.pagina).subscribe({
      next: (pe) => {
        this.listadoBusqueda= pe; 
        console.log(this.listadoBusqueda);
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })
  }

  filtrarAnio(año:string)
  {
    this.peliculaService.getPeliculas_PorPalabrayAñoHttp(this.ingreso, año).subscribe({
      next: (pe) => {
        this.listadoBusqueda= pe; 
        console.log(this.listadoBusqueda);
        console.log(this.formulario.get('anio')!.value)
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })
  }
}
