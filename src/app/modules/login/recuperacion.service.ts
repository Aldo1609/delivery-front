import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecuperacionData } from '../models/recuperacion';

@Injectable({
  providedIn: 'root'})
export class PasswordService {
  private apiUrl = 'http://localhost:8082/api/v1/updatePassword';

  constructor(private http: HttpClient) { }

  updatePassword(correo: string, currentPassword: string, contrasena: string): Observable<any> {
    const data: RecuperacionData = new RecuperacionData(correo, currentPassword, contrasena);
    return this.http.put<any>(this.apiUrl, data);
  }
}