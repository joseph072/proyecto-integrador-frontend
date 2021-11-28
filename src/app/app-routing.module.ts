import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductosComponent} from './productos/productos.component';
import {ClientesComponent} from './clientes/clientes.component';
import {VentasComponent} from './ventas/ventas.component';
import {TiendaComponent} from './tienda/tienda.component';
import {AgregarProductoComponent} from "./agregar-producto/agregar-producto.component";
import {DetalleDeProductoComponent} from "./detalle-de-producto/detalle-de-producto.component";
import {TerminarCompraComponent} from "./terminar-compra/terminar-compra.component";
import {DetalleDeVentaComponent} from "./detalle-de-venta/detalle-de-venta.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NologinGuard } from './guards/nologin.guard';
import { UserGuard } from './guards/user.guard';
import { VentasClienteComponent } from './ventas-cliente/ventas-cliente.component';
import { DetalleDeVentaClienteComponent } from './detalle-de-venta-cliente/detalle-de-venta-cliente.component';


const routes: Routes = [
  {path: 'productos', component: ProductosComponent, canActivate: [UserGuard]},
  {path: 'login', component: LoginComponent, canActivate: [NologinGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [NologinGuard]},
  {path: 'productos/agregar', component: AgregarProductoComponent},
  {path: 'clientes', component: ClientesComponent, canActivate: [UserGuard] },
  {path: 'ventas', component: VentasComponent, canActivate: [UserGuard]},
  {path: 'ventas-cliente', component: VentasClienteComponent, canActivate: [UserGuard]},
  {path: 'tienda', component: TiendaComponent, canActivate: [UserGuard]},
  {path: 'producto/detalle/:id', component: DetalleDeProductoComponent, canActivate: [UserGuard]},
  {path: 'terminar_compra', component: TerminarCompraComponent, canActivate: [UserGuard]},
  {path: 'detalle-venta/:id', component: DetalleDeVentaComponent, canActivate: [UserGuard]},
  {path: 'detalle-venta-cliente/:id', component: DetalleDeVentaClienteComponent, canActivate: [UserGuard]},
  {path: '', redirectTo: "/login", pathMatch: "full"},
  {path: '**', redirectTo: "/login"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, // <- Indicar que se use el hash
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
