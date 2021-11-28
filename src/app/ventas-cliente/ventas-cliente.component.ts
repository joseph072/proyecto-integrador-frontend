import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentasService } from '../ventas.service';

@Component({
  selector: 'app-ventas-cliente',
  templateUrl: './ventas-cliente.component.html',
  styleUrls: ['./ventas-cliente.component.css']
})
export class VentasClienteComponent implements OnInit {

  constructor(private ventasService: VentasService, private router:Router) { }

  public ventas = [];
  public columnas = ['cliente', 'direccion', 'total', 'detalles'];


  async ngOnInit() {

    const nombre = JSON.parse(localStorage.getItem('user'));
    this.ventas = await this.ventasService.obtenerDetalleDeVentaCliente(nombre.nombre);

  }


  public verDetalle(id) {
    console.log({id})
    this.router.navigate(["/detalle-venta-cliente", id])
  }


 

}
