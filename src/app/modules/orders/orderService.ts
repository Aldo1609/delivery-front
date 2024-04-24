import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:8081/api/v1/orders');
  }

  updateOrderDelivery(id: number, delivery: number): Observable<Order> {
    return this.http.put<Order>(`http://localhost:8081/api/v1/orders/delivery/${id}`, { delivery });
  }

}