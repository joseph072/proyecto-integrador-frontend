export class Usuario {
  constructor(
    public nombre: string, 
    public direccion: string, 
    public documento?: string, 
    public telefono?: string,
    public usuario?: string,
    public clave?: string,
    public rol?: string,
    ) {
  }
}



export class Login {
  constructor(
    public usuario?: string,
    public clave?: string,
    ) {
  }
}
