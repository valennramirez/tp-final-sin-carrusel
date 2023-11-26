import { Component } from '@angular/core';
import { AutService } from 'src/app/services/user/aut.service';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent {
constructor (private autService: AutService) {}
}
