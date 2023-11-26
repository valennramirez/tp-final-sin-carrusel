import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Peliculas } from 'src/app/interfaces/peliculas';
import { User } from 'src/app/interfaces/user';
import { PeliculasService } from 'src/app/services/api-service/peliculas-service/peliculas.service';
import { AutService } from 'src/app/services/user/aut.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-visualizar-info-pelicula',
  templateUrl: './visualizar-info-pelicula.component.html',
  styleUrls: ['./visualizar-info-pelicula.component.css']
})
export class VisualizarInfoPeliculaComponent implements OnInit {

  constructor  (private peliculaService: PeliculasService, 
                private router: ActivatedRoute,
                private userService: UserService, 
                private autService: AutService){} 

  ngOnInit() {

    this.getIngreso(); 
    this.setPelicula(); 
    this.setSimilares(); 
  }
 
  pelicula:any; 
  listadoRecomendaciones: any =[]; 

  id:string=''; 

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

  listaVer: Peliculas[]=[]; 

  get getUser():User | any {
    return this.autService.currentUser;
  }

  getIngreso() 
  {
    this.router.params.subscribe( param => 
      {
        this.id=param['id']; 
        
      })
  }

  setPelicula(){
        this.peliculaService.getPelicula_PorIdHttp(this.id).subscribe({
          next: (peli) => {
            this.pelicula= peli; 
            this.setDatosPelicula_DOM(); 
          }, 
          error: (err)=>{
            console.log(err); 
          }
        })
  }

  setSimilares()
  {
    this.peliculaService.getPeliculas_RecomendacionesHttp(this.id).subscribe({
      next: (peli) => {
        this.listadoRecomendaciones= peli; 
        console.log(this.listadoRecomendaciones); 
      }, 
      error: (err)=>{
        console.log(err); 
      }
    })
  }


  concatenarGenero(generos:[] ){
    let genre = "";
    generos.forEach((genero:any) => {
      genre += genero.name +", ";
    });

    genre=genre.substring(0, genre.length - 2);
    genre += ".";

    return genre;
  }

  concatenarIdiomas(idiomas:[] ){
    let idiomasA = "";
    idiomas.forEach((idiomas:any) => {
      idiomasA += idiomas.english_name +", ";
    });

    idiomasA=idiomasA.substring(0, idiomasA.length - 2);
    idiomasA += ".";

    return idiomasA; 
  }

  setDatosPelicula_DOM(){
    const poster= document.querySelector('#poster'); 
      poster!.setAttribute('src', `${'https://image.tmdb.org/t/p/w500'}${this.pelicula.poster_path}`); 

      const titulo= document.querySelector('#titulo'); 
      titulo!.textContent=this.pelicula.title; 

      const sinopsis=document.querySelector('#sinopsis'); 
      sinopsis!.textContent=this.pelicula.overview;

      const productora = document.querySelector('#productora'); 
      productora!.textContent=this.pelicula.production_companies[0].name; 

      const genero= document.querySelector('#genero'); //hay mas de un genero, habria que hacer una funcion para unirlos
      genero!.textContent=this.concatenarGenero(this.pelicula.genres);


      const duracion= document.querySelector('#duracion');
      duracion!.textContent=`${this.pelicula.runtime} minutos`; 

      const fechaLanzamiento= document.querySelector('#lanzamiento');
      fechaLanzamiento!.textContent=this.pelicula.release_date; 


      const idioma= document.querySelector('#idioma');
      idioma!.textContent= this.concatenarIdiomas(this.pelicula.spoken_languages);  
  
      const ratings=document.querySelector('#ratings'); 
      ratings!.textContent=this.pelicula.vote_average + ' / 10';
  }




  //Manejo listas

  setPeliLista()
  {
   const peli: Peliculas={
      id: this.id, 
      poster_path:this.pelicula.poster_path, 
      title:this.pelicula.title
    } 

    return peli; 
  }

  buscarEnListaVer()
  {
    return this.user.listaVer.find((e => 
      {
        return e.id == this.pelicula.id; 
      }))
  }

  guardarEnListaVer()
  {
    const p=this.setPeliLista(); 

    this.user.listaVer.push(p);
    
    this.userService.putUsuarioHttp(this.user!).subscribe({
      next: (pe) => {
        alert( "Pelicula guardada con exito");  
        console.log(pe); 
      }, 
      error: (err)=>{
        alert( "No se pudo agregar la pelicula"); 
        console.log(err); 
      }
    });

    if(this.buscarEnListaVistos())
    {
      this.eliminarPeliculaListaVistos(); 
    }
    
  }

  buscarIndiceListaVer()
  {
    const p: Peliculas=this.setPeliLista(); 

    return this.user.listaVer.indexOf(p);  
  }

  eliminarPeliculaListaVer()
  {
    const i=this.buscarIndiceListaVer(); 

    this.user.listaVer.splice(i, 1); 

    this.userService.putUsuarioHttp(this.user!).subscribe({
      next: (pe) => {
        alert( "Pelicula eliminada con exito");  
        console.log(pe); 
      }, 
      error: (err)=>{
        alert( "No se pudo eliminar la pelicula"); 
        console.log(err); 
      }
    });
  }


  buscarEnListaVistos()
  {
    return this.user.listaVistos.find((e => 
      {
        return e.id == this.pelicula.id; 
      }))
  }

  guardarEnListaVistos()
  {
    const p= this.setPeliLista(); 

    this.user.listaVistos.push(p);

    this.userService.putUsuarioHttp(this.user!).subscribe({
      next: (pe) => {
        alert( "Pelicula guardada con exito");  
        console.log(pe); 
      }, 
      error: (err)=>{
        alert( "No se pudo agregar la pelicula"); 
        console.log(err); 
      }
    }); 

    
    if(this.buscarEnListaVer())
    {
      this.eliminarPeliculaListaVer(); 
    }
    
  }

  buscarIndiceListaVistos()
  {
    const p: Peliculas=this.setPeliLista(); 

    return this.user.listaVistos.indexOf(p);  
  }

  eliminarPeliculaListaVistos()
  {
    const i=this.buscarIndiceListaVer(); 

    this.user.listaVistos.splice(i, 1); 

    this.userService.putUsuarioHttp(this.user!).subscribe({
      next: (pe) => {
        alert( "Pelicula eliminada con exito");  
        console.log(pe); 
      }, 
      error: (err)=>{
        alert( "No se pudo eliminar la pelicula"); 
        console.log(err); 
      }
    });
  }
  
}
