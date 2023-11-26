import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPeliculasVistasComponent } from './listar-peliculas-vistas.component';

describe('ListarPeliculasVistasComponent', () => {
  let component: ListarPeliculasVistasComponent;
  let fixture: ComponentFixture<ListarPeliculasVistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPeliculasVistasComponent]
    });
    fixture = TestBed.createComponent(ListarPeliculasVistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
