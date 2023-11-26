import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPeliculasComponent } from './busqueda-peliculas.component';

describe('BusquedaPeliculasComponent', () => {
  let component: BusquedaPeliculasComponent;
  let fixture: ComponentFixture<BusquedaPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
