export class LoginData {
    correo: string;
    contrasena: string;
    rol: string;
  
    constructor(correo: string, contrasena: string, rol: string) {
      this.correo = correo;
      this.contrasena = contrasena;
      this.rol = rol;
    }
  }