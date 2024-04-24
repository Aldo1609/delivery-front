import { Component, OnInit } from '@angular/core';
import { OrderService } from './orderService';
import { FOOD_ID_TO_NAME} from './food-id-to-name';
import { FOOD_ID_TO_IMAGE_URL } from './food-id-to-image';
import { DELIVERY_ID_TO_NAME } from './delivery-id-to-name';
import { Order } from '../models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html', 
})
export class OrdersComponent implements OnInit {
  orders: Order[] = []; 

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data.filter(order => order.delivery === 1);
    });
  }

  changeDelivery(order: Order, newDelivery: number) {
    this.orderService.updateOrderDelivery(order.id, newDelivery).subscribe(updatedOrder => {
      const index = this.orders.findIndex(o => o.id === updatedOrder.id);
      if (index !== -1) {
        this.orders[index] = updatedOrder;
      }
    }, error => {
      console.error('Error updating order delivery:', error);
    }, () => {
      this.orderService.getOrders().subscribe(data => {
        this.orders = data.filter(order => order.delivery === 1);
      });
    });
  }

  getFoodName(id: number): string {
    return FOOD_ID_TO_NAME[id] || 'Desconocido';
  }

  getFoodImage(id: number): string {
    return FOOD_ID_TO_IMAGE_URL[id] || 'assets/images/default.jpg';
  }

  getDeliveryStatusName(id: number): string {
    return DELIVERY_ID_TO_NAME[id] || 'Desconocido';
  }

  navigateToHome() {  
    this.router.navigate(['/home']);
  }

  navigateToAceptadas() {  
    this.router.navigate(['/ordersAceptadas']);
  }

  navigateToCanceladas() {  
    this.router.navigate(['/ordersCanceladas']);
  }

  navigateToEnviadas() {  
    this.router.navigate(['/ordersEnviadas']);
  }

}