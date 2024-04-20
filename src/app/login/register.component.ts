import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { RegisterData } from '../models/register';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerData: RegisterData = new RegisterData('', '', '');
  showPassword = false;  

  constructor(private registerService: RegisterService, private router: Router, private toastr: ToastrService) { }

  onSubmit(): void {
    this.registerService.register(this.registerData.usuario, this.registerData.correo, this.registerData.contrasena).subscribe(() => {
      this.router.navigate(['/login']);
      Swal.fire('Success', 'Usuario registrado correctamente', 'success');
    }, error => {
      console.error('Error:', error);
      Swal.fire('Error', 'Hubo un error al registrar al usuario', 'error');
    });
  }

  togglePasswordVisibility() {  
    this.showPassword = !this.showPassword;
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}