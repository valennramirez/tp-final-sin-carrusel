import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AutService } from 'src/app/services/user/aut.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-visualizar-mi-usuario',
  templateUrl: './visualizar-mi-usuario.component.html',
  styleUrls: ['./visualizar-mi-usuario.component.css']
})
export class VisualizarMiUsuarioComponent implements OnInit {

  user:User | any; 

  constructor(private router: ActivatedRoute, private userService: UserService, private autService: AutService) { }

  ngOnInit(): void {
    this.visualizarUsuario(); 
  }

  get getUser():User | undefined{
    return this.autService.currentUser;
  }

  visualizarUsuario()
  {
    this.user = this.getUser; 
  }

}
