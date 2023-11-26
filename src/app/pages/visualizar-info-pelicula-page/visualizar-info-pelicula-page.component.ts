import { Component } from '@angular/core';
import { AutService } from 'src/app/services/user/aut.service';

@Component({
  selector: 'app-visualizar-info-pelicula-page',
  templateUrl: './visualizar-info-pelicula-page.component.html',
  styleUrls: ['./visualizar-info-pelicula-page.component.css']
})
export class VisualizarInfoPeliculaPageComponent {
  constructor( private autService: AutService) { }

  ngOnInit(): void {
  }

  get currentUser()
  {
    return this.autService.currentUser; 
  }

}
