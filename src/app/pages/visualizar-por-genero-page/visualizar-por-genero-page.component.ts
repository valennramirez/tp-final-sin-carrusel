import { Component, OnInit } from '@angular/core';
import { AutService } from 'src/app/services/user/aut.service';

@Component({
  selector: 'app-visualizar-por-genero-page',
  templateUrl: './visualizar-por-genero-page.component.html',
  styleUrls: ['./visualizar-por-genero-page.component.css']
})
export class VisualizarPorGeneroPageComponent implements OnInit {

  constructor( private autService: AutService) { }

  ngOnInit(): void {
  }

  get currentUser()
  {
    return this.autService.currentUser; 
  }
}
