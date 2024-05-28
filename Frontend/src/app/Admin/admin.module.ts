import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SellerComponent } from './Components/seller/seller.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AdminNavbarComponent } from './Components/admin-navbar/admin-navbar.component';
import { SellersListComponent } from './Components/sellers-list/sellers-list.component';
import { CategoryFormComponent } from './Components/category-form/category-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductformComponent } from './Components/productform/productform.component';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { ViewOrderComponent } from './Components/view-order/view-order.component';
import { IndianNumberPipe } from '../indian-number.pipe';
import { StockFormComponent } from './Components/stock-form/stock-form.component';



@NgModule({
  declarations: [
    SellerComponent,
    AdminComponent,
    AdminNavbarComponent,
    SellersListComponent,
    CategoryFormComponent,
    ProductformComponent,
    OrderListComponent,
    ViewOrderComponent,
    StockFormComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
