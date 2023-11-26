import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor (private formBuilder: FormBuilder, 
    private UserService: UserService, 
    private route: Router
   ) 
    {} 
  ngOnInit(): void {
    this.initLogin(); 
    this.getUsuarios();
  }

  public usuarioDatos={
    usuario: '', 
    contraseña: ''
  }

  user: User | undefined; 
  formulario!: FormGroup; 
  listadoUsuarios: User[] | undefined=[]; 

  initLogin() {
    this.formulario= this.formBuilder.group({
      usuario:['', (Validators.required)], 
      contraseña:['', (Validators.required)]
    }); 
  }

  async getUsuarios()
  {
    this.listadoUsuarios= await this.UserService.getUsuarios(); 
  }

  async iniciarSesion ()
  {
    if(this.formulario.invalid) return; 
    
    this.usuarioDatos.usuario= this.formulario.get('usuario')?.value;
    this.usuarioDatos.contraseña= this.formulario.get('contraseña')?.value;

    this.user= this.listadoUsuarios?.find((e) => { 
      return e.usuario == this.usuarioDatos.usuario
    }); 
    
    if(this.user)
    {
      if(this.usuarioDatos.contraseña==this.user!.contraseña)
        {
          this.route.navigate(['home']); 
        }
        else
        {
          alert("contraseña mal ingresada"); 
        }
    }
    else
    {
      alert("usuario no existe"); 
    }
    }
  }


