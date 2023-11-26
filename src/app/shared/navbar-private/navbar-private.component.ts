import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AutService } from 'src/app/services/user/aut.service';

@Component({
  selector: 'app-navbar-private',
  templateUrl: './navbar-private.component.html',
  styleUrls: ['./navbar-private.component.css']
})
export class NavbarPrivateComponent implements OnInit {

  constructor(private autService: AutService, private router: Router) { }

  ngOnInit(): void {
    this.user!=this.getUser; 
    this.setRouterLink(); 
  }

  setRouterLink()
  {
    const routerLink= document.querySelector('#usuario'); 
    routerLink?.setAttribute('routerLink', '/perfil/{{this.user.id}}'); 
  }
  user!:User; 

  get getUser()
  {
    return this.autService.currentUser; 
  }

  cerrarSesion()
  {
    this.autService.logOut(); 
    this.router.navigate(['/login']); 
  }
}
