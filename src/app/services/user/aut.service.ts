import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AutService {

  constructor(private http: HttpClient, private router: Router) { }

  private url: string = "http://localhost:4000/usuarios"; 
  
  user!:User; 

  get currentUser(): User 
  {
    return structuredClone(this.user!); 
  }

  getUsuariosHttp (): Observable<User[]>
  {
    return this.http.get<User[]>(this.url); 
  }

  verificarUsuarioContraseña (us: string, con: string) 
  {  this.getUsuariosHttp().subscribe(usuarios =>{
      usuarios.find(u =>{
        if(u.usuario == us && u.contraseña==con)
        {
          this.user= u; 
          localStorage.setItem('token', u.id.toString()); 
          this.router.navigate(['/private']);
        }
      });
    });
  }

    checkEstatusAutenticacion(): Observable <boolean>
    {
      const id = localStorage.getItem('token'); 
      if(!id){
        return of(false) ;
      } 

      return this.http.get<User>(`${this.url}/${id}`)
       .pipe (
         tap(u => this.user = u), 
         map(u => !!u),
         catchError (err => of(false))
       );

    }

    logOut()
    {
      this.user!=undefined; 
      localStorage.clear(); 
    }
  }



