import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product/product.component";
import { ProductsComponent } from "./products/products.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ProductComponent, ProductsComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [ProductComponent, ProductsComponent],
})
export class ProductsModule {}
