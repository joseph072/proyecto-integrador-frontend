import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuarioModel = new Usuario("", "",);


  constructor(public usuarioService: UsuariosService,
    private snackBar: MatSnackBar) { }

  public cargando = false;


  ngOnInit(): void {
  }


  async guardar() { 
    console.log(this.usuarioModel);

    if (!this.usuarioModel.nombre) {
      return alert("Escribe un nombre");
    }
    if (!this.usuarioModel.direccion) {
      return alert("Escribe la direccion");
    }
    if (!this.usuarioModel.documento) {
      return alert("Escribe el documento");
    }
    if (!this.usuarioModel.telefono) {
      return alert("Escribe un telefono");
    }
    if (!this.usuarioModel.usuario) {
      return alert("Escribe un usuario");
    }
    if (!this.usuarioModel.clave) {
      return alert("Escribe una clave");
    }
    if (!this.usuarioModel.rol) {
      return alert("Seleccione un rol");
    }
    this.cargando = true;
    await this.usuarioService.agregarUsuario(this.usuarioModel);
    this.snackBar.open("Usuario registrado", "", {
      duration: 1500,
      horizontalPosition: "start",
      verticalPosition: "top",
    });

    this.cargando = false;
    this.usuarioModel = new Usuario("", "");
  }


}
