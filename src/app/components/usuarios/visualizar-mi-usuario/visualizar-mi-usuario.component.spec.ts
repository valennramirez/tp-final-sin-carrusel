import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarMiUsuarioComponent } from './visualizar-mi-usuario.component';

describe('VisualizarMiUsuarioComponent', () => {
  let component: VisualizarMiUsuarioComponent;
  let fixture: ComponentFixture<VisualizarMiUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarMiUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarMiUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
