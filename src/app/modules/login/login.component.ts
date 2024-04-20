import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { LoginData } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginData: LoginData = new LoginData('', '', '');
  showPassword = false;  

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(): void {
    this.loginService.login(this.loginData.correo, this.loginData.contrasena).subscribe(() => {
      this.router.navigate(['/orders']);
    });
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