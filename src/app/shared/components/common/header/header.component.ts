import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "header-component",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public subject: string = "";
  public formValues = {
    subject: "",
  };

  constructor(private productService: ProductService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {}

  find() {
    if (this.formValues.subject) {
      this.router.navigate(["/products"], {
        queryParams: { subject: this.formValues.subject },
      });
      this.productService.subject = this.formValues.subject;
    } else {
      this.router.navigate(["/products"]);
      this.productService.subject = "";
    }
  }

  resetSearch() {
    this.formValues.subject = "";
    this.productService.subject = this.formValues.subject;
    this.router.navigate(["/products"]);
  }
}
