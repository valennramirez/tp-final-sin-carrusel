import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarInfoPeliculaComponent } from './visualizar-info-pelicula.component';

describe('VisualizarInfoPeliculaComponent', () => {
  let component: VisualizarInfoPeliculaComponent;
  let fixture: ComponentFixture<VisualizarInfoPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarInfoPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarInfoPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
