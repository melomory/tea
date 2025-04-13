import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/common/header/header.component";
import { FooterComponent } from "./components/common/footer/footer.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ProductCardComponent } from "./components/common/product-card/product-card.component";
import { RestrictTextLengthPipe } from "./pipes/restrict-text-length.pipe";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    RestrictTextLengthPipe,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    RestrictTextLengthPipe,
  ],
})
export class SharedModule {}
