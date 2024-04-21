import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:8082/api/v1/register';

  constructor(private http: HttpClient) { }

  register(usuario: string, correo: string, contrasena: string): Observable<any> {
    const body = { usuario, correo, contrasena };
    return this.http.post(this.apiUrl, body);
  }

}