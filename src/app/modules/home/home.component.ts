import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendientes',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToOrders() {  
    this.router.navigate(['/ordersPendientes']);
  }

  navigateToAdmin() {  
    this.router.navigate(['/admin']);
  }

  navigateToPendientes() {  
    this.router.navigate(['/ordersPendientes']);
  }

}
