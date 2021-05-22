import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarnotasComponent } from './listarnotas.component';

describe('ListarnotasComponent', () => {
  let component: ListarnotasComponent;
  let fixture: ComponentFixture<ListarnotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarnotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarnotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
