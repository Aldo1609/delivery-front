export class RegisterData {
    usuario: string;
    correo: string;
    contrasena: string;
  
    constructor(correo: string, contrasena: string, usuario: string) {
      this.usuario = usuario;
      this.correo = correo;
      this.contrasena = contrasena;

    }
  }