import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(correo: string, contrasena: string): Observable<any> {
    return this.http.post('http://localhost:8082/api/v1/login', { correo, contrasena }).pipe(
    );
  }


}