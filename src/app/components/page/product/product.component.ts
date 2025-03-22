import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { ProductType } from "src/app/types/product.type";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  product: ProductType;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.product = {
      id: 0,
      image: "",
      title: "",
      price: 0,
      description: "",
    };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.productService.getProduct(params["id"]).subscribe({
          next: (data) => {
            console.log(data);
            if (data) {
              this.product = data[0];
            }
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(["/"]);
          },
        });
      }
    });
  }
}
