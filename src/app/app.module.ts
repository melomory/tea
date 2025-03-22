import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/pages/main/main.component";
import { HeaderComponent } from "./components/common/header/header.component";
import { FooterComponent } from "./components/common/footer/footer.component";
import { ProductsComponent } from "./components/pages/products/products.component";
import { ProductCardComponent } from "./components/common/product-card/product-card.component";
import { ProductService } from "./services/product.service";
import { HttpClientModule } from "@angular/common/http";
import { RestrictTextLengthPipe } from './pipes/restrict-text-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductCardComponent,
    RestrictTextLengthPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
