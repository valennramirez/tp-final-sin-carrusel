import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPeliculasGeneroComponent } from './visualizar-peliculas-genero.component';

describe('VisualizarPeliculasGeneroComponent', () => {
  let component: VisualizarPeliculasGeneroComponent;
  let fixture: ComponentFixture<VisualizarPeliculasGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarPeliculasGeneroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarPeliculasGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
