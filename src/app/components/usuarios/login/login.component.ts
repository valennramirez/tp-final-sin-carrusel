import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AutService } from 'src/app/services/user/aut.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private formBuilder: FormBuilder, 
    private autService: AutService, 
    private userService: UserService,
    private route: Router
   ) 
    {} 
  ngOnInit(): void {
    this.initLogin(); 
  }

  user!: User | undefined; 
  flag!:boolean | Observable<boolean>; 
  formulario!: FormGroup; 
  listadoUsuarios: User[]| any=[]; 

  initLogin() {
    this.formulario= this.formBuilder.group({
      usuario:['', (Validators.required)], 
      contraseña:['', (Validators.required)]
    }); 
  }

  get currentUser ()
  {
    return this.autService.currentUser; 
  }

  iniciarSesion ()
  {
    const u=this.autService.verificarUsuarioContraseña(this.formulario.get('usuario')?.value, this.formulario.get('contraseña')?.value); 
    
    console.log(this.currentUser); 

    if(this.user == undefined)
    {
      alert('Usuario o contraseña incorrectos.'); 
      console.log('i ')
    }
  }

  /*validarUsuario(field:string)
  {
    this.userService.verificarUsuario(field).subscribe( u =>{
      this.user=u; 
    })
    return this.user && this.formulario.controls[field].touched;
  }

  validarContrasena(field:string)
  {
    return this.userService.verificarContraseña(this.user.usuario, field) && this.formulario.controls[field].touched;
  }*/

  validar(field: string, error: string){
    return this.formulario.controls[field].getError(error)
    &&
    this.formulario.controls[field].touched;
  }
}
