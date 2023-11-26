import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioPageComponent } from './perfil-usuario-page.component';

describe('PerfilUsuarioPageComponent', () => {
  let component: PerfilUsuarioPageComponent;
  let fixture: ComponentFixture<PerfilUsuarioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilUsuarioPageComponent]
    });
    fixture = TestBed.createComponent(PerfilUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
