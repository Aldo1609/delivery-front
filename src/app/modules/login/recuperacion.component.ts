import { Component } from '@angular/core';
import { RecuperacionData } from '../models/recuperacion';
import { PasswordService } from './recuperacion.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html'
})
export class RecuperacionComponent {
  recuperacionData: RecuperacionData = new RecuperacionData('', '', '');

  constructor(private passwordService: PasswordService, private router: Router) { }

  onSubmit(): void {
    this.passwordService.updatePassword(this.recuperacionData.correo, this.recuperacionData.currentPassword, this.recuperacionData.contrasena).subscribe(() => {
      Swal.fire('Success', 'Contraseña actualizada correctamente', 'success');
      this.navigateToLogin();
    }, (error: any) => {
      Swal.fire('Error', 'Hubo un error al actualizar la contraseña', 'error');
    });
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }


}