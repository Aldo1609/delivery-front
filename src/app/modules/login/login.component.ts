import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { LoginData } from '../models/login';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginData: LoginData = new LoginData('', '', '');
  showPassword = false;  
  loginForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', Validators.required)
  });

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('correo')?.value || '';
      const password = this.loginForm.get('contrasena')?.value || '';
      this.loginService.login(email, password).subscribe(() => {
        this.router.navigate(['/orders']);
      });
    }
  }

  togglePasswordVisibility() {  
    this.showPassword = !this.showPassword;
  }

  navigateToRegister() {  
    this.router.navigate(['/register']);
  }

  navigateToRecuperacion() {  
    this.router.navigate(['/recuperar']);
  }
}