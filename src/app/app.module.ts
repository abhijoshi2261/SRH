import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Buyer/components/navbar/navbar.component';
import { HomeComponent } from './Buyer/components/home/home.component';
import { FooterComponent } from './Buyer/components/footer/footer.component';
import { CartComponent } from './Buyer/components/cart/cart.component';
import { ProductListComponent } from './Buyer/components/product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[NavbarComponent,HomeComponent,FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
