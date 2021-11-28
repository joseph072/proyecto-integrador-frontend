import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {CarritoService} from "./carrito.service";
import {DataSharingService} from "./data-sharing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce-angular-node';
  public productos = [];

  userTipo = '';
  user = '';

  constructor(private carritoService: CarritoService, private dataSharingService: DataSharingService,public route: Router) {
    // Comunicación entre componentes
    this.dataSharingService.currentMessage.subscribe(mensaje => {
      if (mensaje == "car_updated") {
        this.refrescarCarrito();
      }
    })
  }

  public async refrescarCarrito() {
    this.productos = await this.carritoService.obtenerProductos();
  }

  public total() {
    // Quién te conoce reduce
    let total = 0;
    this.productos.forEach(p => total += p.precio);
    return total;
  }

  ngOnInit(): void {
    this.refrescarCarrito();
    console.log(this.userTipo);
    this.userTipo = localStorage.getItem('role');

    const nombre = JSON.parse(localStorage.getItem('user'));
    this.user = nombre.nombre;

    
  }

  mantenimiento(){
    this.ngOnInit();
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
    window.location.reload();

    
  }

}
