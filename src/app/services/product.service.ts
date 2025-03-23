import { Injectable } from "@angular/core";
import { ProductType } from "../types/product.type";
import { filter, Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  public subject: string = "";

  constructor(private http: HttpClient) {}

  getProducts(searchSubject?: string): Observable<ProductType[]> {
    return this.http.get<ProductType[]>("https://testologia.ru/tea", { params: searchSubject ? new HttpParams().set('search', searchSubject) : undefined });
  }

  getProduct(id: number): Observable<ProductType[]> {
    return this.getProducts().pipe(
      filter((result) => !result.find((item) => item.id === id))
    );
  }
}
