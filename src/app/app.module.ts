import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './modules/orders/orders.component';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './modules/login/register.component';
import { ToastrModule } from 'ngx-toastr';
import { RecuperacionComponent } from './modules/login/recuperacion.component';
import { HomeComponent } from './modules/home/home.component';
import { AceptadasComponent } from './modules/orders/aceptadas/aceptadas.component';
import { EnviadasComponent } from './modules/orders/enviadas/enviadas.component';
import { CanceladasComponent } from './modules/orders/canceladas/canceladas.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    LoginComponent,
    RegisterComponent,
    RecuperacionComponent,
    HomeComponent,
    AceptadasComponent,
    EnviadasComponent,
    CanceladasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
