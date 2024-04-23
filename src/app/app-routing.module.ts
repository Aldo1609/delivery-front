import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './modules/orders/orders.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/login/register.component';
import { RecuperacionComponent } from './modules/login/recuperacion.component';
import { HomeComponent } from './modules/home/home.component';
import { AceptadasComponent } from './modules/orders/aceptadas/aceptadas.component';
import { EnviadasComponent } from './modules/orders/enviadas/enviadas.component';
import { CanceladasComponent } from './modules/orders/canceladas/canceladas.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ordersPendientes', component: OrdersComponent},
  { path: 'ordersAceptadas', component: AceptadasComponent},
  { path: 'ordersEnviadas', component: EnviadasComponent},
  { path: 'ordersCanceladas', component: CanceladasComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'recuperar', component: RecuperacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }