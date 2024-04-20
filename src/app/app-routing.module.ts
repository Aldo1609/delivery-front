import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './modules/orders/orders.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/login/register.component';
import { RecuperacionComponent } from './modules/login/recuperacion.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recuperar', component: RecuperacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }