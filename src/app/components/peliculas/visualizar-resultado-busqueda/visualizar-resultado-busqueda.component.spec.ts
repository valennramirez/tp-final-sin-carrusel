import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarResultadoBusquedaComponent } from './visualizar-resultado-busqueda.component';

describe('VisualizarResultadoBusquedaComponent', () => {
  let component: VisualizarResultadoBusquedaComponent;
  let fixture: ComponentFixture<VisualizarResultadoBusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarResultadoBusquedaComponent]
    });
    fixture = TestBed.createComponent(VisualizarResultadoBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
