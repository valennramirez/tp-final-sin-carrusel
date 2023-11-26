import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Peliculas } from '../../../interfaces/peliculas';
import { PeliculasService } from 'src/app/services/api-service/peliculas-service/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AutService } from 'src/app/services/user/aut.service';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent {
  
  constructor  (private peliculaService: PeliculasService, private router: ActivatedRoute, private autService: AutService){} ///deberia ser del service de listas

  ngOnInit(): void {
    this.getOp(); 
    this.mostrarLista();
  }

  listaPeliculas: Peliculas[] | any=[]; 
  user: User={
    gmail: this.getUser?.gmail, 
    usuario:this.getUser!.usuario, 
    nombre: this.getUser!.nombre, 
    apellido: this.getUser!.apellido, 
    contraseña:this.getUser!.contraseña,
    id: this.getUser!.id, 
    cumpleaños: this.getUser!.cumpleaños,
    genero: this.getUser!.genero, 
    listaVer:this.getUser!.listaVer, 
    listaVistos: this.getUser!.listaVistos, 
    fotoPerfil: this.getUser!.fotoPerfil
  }; 


  op:number=0; 


  get getUser(): User | any
  {
    return this.autService.currentUser; 
  }

  getOp ()
  {
    this.router.params.subscribe( param => 
      {
        this.op=+param['op']; 
        
      })
  }

 
  mostrarLista()
  {
    if(this.op==1)
    {
      const tit= document.querySelector('#header'); 
      tit!.textContent="Lista de peliculas que quiero ver"; 
      this.listaPeliculas=this.user?.listaVer;
    }
    else if(this.op==2)
    {
      const tit= document.querySelector('#header'); 
      tit!.textContent="Lista de peliculas que ya vi"; 
      this.listaPeliculas=this.user?.listaVistos; 
    }
    console.log(this.listaPeliculas);
  }

}
