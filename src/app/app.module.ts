import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Buyer/components/navbar/navbar.component';
import { FooterComponent } from './Buyer/components/footer/footer.component';
import { CartComponent } from './Buyer/components/cart/cart.component';
import { ProductListComponent } from './Buyer/components/product-list/product-list.component';
import { SignInComponent } from './userForms/sign-in/sign-in.component';
import { BuyerHomeComponent } from './Buyer/components/buyer-home/buyer-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuyerHomeComponent,
    FooterComponent,
    CartComponent,
    ProductListComponent,
    SignInComponent,
    BuyerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[NavbarComponent,BuyerHomeComponent,FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
