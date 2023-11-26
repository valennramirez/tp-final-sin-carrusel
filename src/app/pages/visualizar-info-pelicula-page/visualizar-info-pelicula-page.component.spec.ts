import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarInfoPeliculaPageComponent } from './visualizar-info-pelicula-page.component';

describe('VisualizarInfoPeliculaPageComponent', () => {
  let component: VisualizarInfoPeliculaPageComponent;
  let fixture: ComponentFixture<VisualizarInfoPeliculaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarInfoPeliculaPageComponent]
    });
    fixture = TestBed.createComponent(VisualizarInfoPeliculaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
