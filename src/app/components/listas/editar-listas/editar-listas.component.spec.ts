import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarListasComponent } from './editar-listas.component';

describe('EditarListasComponent', () => {
  let component: EditarListasComponent;
  let fixture: ComponentFixture<EditarListasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarListasComponent]
    });
    fixture = TestBed.createComponent(EditarListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
