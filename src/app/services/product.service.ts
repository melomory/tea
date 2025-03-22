import { Injectable } from "@angular/core";
import { ProductType } from "../types/product.type";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products: ProductType[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>("https://testologia.ru/tea");
  }
}
