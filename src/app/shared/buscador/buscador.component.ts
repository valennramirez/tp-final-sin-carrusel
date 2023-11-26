import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  formulario!: FormGroup; 

  ngOnInit(): void {
    this.initBusqueda(); 
  }

  initBusqueda()
  {
    this.formulario=this.formBuilder.group({
      titulo: ''
    })
  }
}
