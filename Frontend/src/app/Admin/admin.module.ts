import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SellerComponent } from './Components/seller/seller.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AdminNavbarComponent } from './Components/admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [
    SellerComponent,
    AdminComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
