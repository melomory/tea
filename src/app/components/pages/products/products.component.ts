import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs";
import { ProductService } from "src/app/services/product.service";
import { ProductType } from "src/app/types/product.type";

@Component({
  selector: "products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  public products: ProductType[] = [];
  public isLoading: boolean = false;
  public isSearch: boolean = false;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;

    if (this.productService.subject) {
      this.isSearch = true;
    }

    this.productService
      .getProducts(this.productService.subject)
      .pipe(tap(() => (this.isLoading = false)))
      .subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(["/"]);
        },
      });
  }

  getSubject() {
    return this.productService.subject;
  }
}
