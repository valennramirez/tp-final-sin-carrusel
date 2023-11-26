import { Component } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/peliculas';
import { User } from 'src/app/interfaces/user';
import { PeliculasService } from 'src/app/services/api-service/peliculas-service/peliculas.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-listar-peliculas-vistas',
  templateUrl: './listar-peliculas-vistas.component.html',
  styleUrls: ['./listar-peliculas-vistas.component.css']
})
export class ListarPeliculasVistasComponent {

   constructor  (private peliculaService: PeliculasService,
                private userService:UserService){} ///deberia ser del service de listas

  ngOnInit(): void {
    this.mostrarListaVistos(); 
  }

  listaVistos: Peliculas[] | undefined=[]; 
    
  user:User | undefined; 

  async setUser(id:number)
  {
    this.user= await this.userService.getUsuario(id); 
  }
  
  mostrarListaVistos()
  {
    this.listaVistos = this.user?.listaVistos; 
  }

}
