import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OrderType } from "../../types/order.type";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(private http: HttpClient) {}

  createOrder(order: OrderType): Observable<{ success: number; message: string }> {
    return this.http.post<any>("https://testologia.ru/order-tea", order);
  }
}
