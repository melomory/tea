import { Injectable } from "@angular/core";
import { ProductType } from "../types/product.type";
import { filter, Observable } from "rxjs";
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

  getProduct(id: number): Observable<ProductType[]> {
    return this.getProducts().pipe(
      filter((result) => !result.find((item) => item.id === id))
    );
  }
}
