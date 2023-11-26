import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit{

  user! :User; 
  
  formulario!:FormGroup; 
  

  constructor (private formBuilder: FormBuilder, 
               private userService: UserService,
               private router:ActivatedRoute, 
               private route: Router
              ) 
               {} 

  ngOnInit(){
     this.initEditar(); 
  }

  getUsuario(id: number)
  {
    this.userService.getUsuarioHttp(id).subscribe({
      next: (us) =>{
        this.user = us; 
        
        this.formulario=this.formBuilder.group({
          gmail: [this.user.gmail],
          usuario:[this.user.usuario],
          nombre: [this.user.nombre],
          apellido:[this.user.apellido],
          contraseña:[this.user.contraseña],
          id:[this.user.id],
          cumpleaños: [this.user.cumpleaños],
          genero:[this.user.genero], 
          listaVer:[this.user.listaVer], 
          listaVistos:[this.user.listaVistos], 
          fotoPerfil:[this.user.fotoPerfil]
        })
      },
      error: (err) =>{
        console.log(err); 
      }
    })
  }

  initEditar(){

    this.formulario=this.formBuilder.group({
      gmail:['', (Validators.required, Validators.email)], 
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
    
    this.router.params.subscribe((async param =>{
      
      const id=+param['id']; 

      this.getUsuario(id); 

      console.log(this.user); 

    }))
  }


  editarUsuario(){
    if(this.formulario.invalid) 
      return; 

   console.log(this.user);
    
   this.userService.putUsuarioHttp(this.formulario.value).subscribe({
    next: (us) =>{
      alert("Usuario editado con exito"); 
      this.route.navigate(['/perfil, this.user.id']); 
    }, 
    error: (err)=>{
      console.log(err); 
    }
   })
}

}
