import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPorGeneroPageComponent } from './visualizar-por-genero-page.component';

describe('VisualizarPorGeneroPageComponent', () => {
  let component: VisualizarPorGeneroPageComponent;
  let fixture: ComponentFixture<VisualizarPorGeneroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarPorGeneroPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarPorGeneroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
