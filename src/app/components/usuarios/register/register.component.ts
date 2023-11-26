import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, map, tap } from 'rxjs';
import { Peliculas } from 'src/app/interfaces/peliculas';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  ngOnInit(): void {
    this.initRegister();
  }

  flagUser!:User; 

  formulario!:FormGroup; 

  initRegister() {
    this.formulario=this.formBuilder.group({
      gmail:['', [Validators.required, Validators.email]], 
      usuario:['', (Validators.required, Validators.minLength(5))], 
      nombre: ['', (Validators.required)], 
      apellido:['', (Validators.required)], 
      contraseña:['', (Validators.required, Validators.minLength(5))],
      id: [0, (Validators.required)], 
      cumpleaños: [new Date(), (Validators.required)], 
      genero:['', (Validators.required)],
      listaVer:[[]], 
      listaVistos:[[]], 
      fotoPerfil: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Kegich.svg/341px-Kegich.svg.png']
    }); 

  }

  constructor (private formBuilder: FormBuilder, 
               private userService: UserService,
               private router: Router
              ) 
               {} 

  user?: User | undefined; 

  guardarUsuario(){ 
    
    if(this.formulario.invalid) return;

    this.userService.postUsuarioHttp(this.formulario.value)
      .subscribe(
        {
          next:(us) => { 
            alert(`Usuario: ${us.usuario}`);
            this.router.navigate(['/private'])
          },
          error: (err)=>{
            console.log(err)
          }
        }
      )
  }

  validar(field: string, error: string){
    return this.formulario.controls[field].getError(error)
    &&
    this.formulario.controls[field].touched;
  }
  

}
