import { Component, OnInit } from '@angular/core';
import { OrderService } from '../orders/orderService';
import { DELIVERY_ID_TO_NAME } from '../orders/delivery-id-to-name';
import { Order } from '../models/order';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: Order[] = [];
  deliveryStatusCounts: { [key: string]: number } = {
    'Pendiente': 0,
    'Aceptada': 0,
    'Entregada': 0,
    'Cancelada': 0
  };

  constructor(private orderService: OrderService) { } 

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
      this.countDeliveryStatus();
    });
  }

  countDeliveryStatus(): void {
    this.orders.forEach(order => {
      const statusName = DELIVERY_ID_TO_NAME[order.delivery];
      this.deliveryStatusCounts[statusName]++;
    });
  }
}