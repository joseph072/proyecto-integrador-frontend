import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Login, Usuario } from './usuario';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  rutaServidor = environment.baseUrl;

  constructor(private http: HttpService,
              public httpClient: HttpClient) { }


  public async agregarUsuario(usuario: Usuario) {
    return await this.http.post("/usuario", usuario);
  }


  public async loginUsuario(usuario: Login) {
    return await this.http.post("/login", usuario);
  }


  login(usuario: Login){
    return this.httpClient.post(this.rutaServidor + "/login", usuario)
    .pipe(
      tap( (resp: any) => { 
      })
    )
  }




}
