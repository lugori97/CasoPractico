import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarnotasComponent } from './actualizarnotas.component';

describe('ActualizarnotasComponent', () => {
  let component: ActualizarnotasComponent;
  let fixture: ComponentFixture<ActualizarnotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarnotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarnotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
