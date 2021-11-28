import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';
import { VentasComponent } from '../ventas/ventas.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioModel = new Login("", "",);


  constructor(public usuarioService: UsuariosService,
              public route: Router) { }

  public cargando = false;

  ngOnInit(): void {
  }


  async login() { 
    console.log(this.usuarioModel);
    await this.usuarioService.login(this.usuarioModel).subscribe(resp => {
      if(resp.ok == true){
        console.log('INGRESA MRD');
        localStorage.setItem('token', resp.token );
        localStorage.setItem('user', JSON.stringify(resp.data[0]) );
        localStorage.setItem('role', resp.data[0].rol );
        if(resp.data[0].rol  == 'cliente') {
           window.location.reload();
          this.route.navigate(['/tienda']);
        } else {
          window.location.reload();
          this.route.navigate(['/ventas']);
        }
      } else {
        console.log('AHI NOMAS MANO');
      }

    });

  }

}
