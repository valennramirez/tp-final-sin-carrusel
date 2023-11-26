import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit{

  constructor(private userService:UserService) {}
  
  ngOnInit(): void {
    this.mostrarUsuarios(); 
  }
;

  listadoUsuarios: User[] | undefined=[]; 


  mostrarUsuarios()
  {
    this.userService.getUsuariosHttp().subscribe({
      next: (us) =>{
        this.listadoUsuarios = us; 
      },
      error: (err) =>{
        console.log(err); 
      }
    })
  }

  eliminarUsuario(id: number)
  {
    this.userService.deleteUsuarioHttp(id).subscribe({
      next: (us) =>{
        alert("El usuario " + us.usuario + " ha sido eliminado"); 
      }, 
      error: (err) =>
      {
        console.log(err);
      }
    })
  }
  

}
