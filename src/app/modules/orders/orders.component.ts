import { Component, OnInit } from '@angular/core';
import { OrderService } from './orderService';
import { FOOD_ID_TO_NAME} from './food-id-to-name';
import { FOOD_ID_TO_IMAGE_URL } from './food-id-to-image';
import { DELIVERY_ID_TO_NAME } from './delivery-id-to-name';
import { Order } from '../models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html', 
})
export class OrdersComponent implements OnInit {
  orders: Order[] = []; 

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
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
}