import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentasService } from '../ventas.service';

@Component({
  selector: 'app-detalle-de-venta-cliente',
  templateUrl: './detalle-de-venta-cliente.component.html',
  styleUrls: ['./detalle-de-venta-cliente.component.css']
})
export class DetalleDeVentaClienteComponent implements OnInit {
  constructor(private ventasService: VentasService, private activatedRoute: ActivatedRoute) {
  }

  public venta = {
    total: 0,
    nombre: "",
    direccion: "",
    productos: [],
  };

  public columnas = ['nombre', 'precio'];

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.venta = await this.ventasService.obtenerDetalleDeVenta(id);
  }

}
