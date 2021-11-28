import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeVentaClienteComponent } from './detalle-de-venta-cliente.component';

describe('DetalleDeVentaClienteComponent', () => {
  let component: DetalleDeVentaClienteComponent;
  let fixture: ComponentFixture<DetalleDeVentaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDeVentaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDeVentaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
