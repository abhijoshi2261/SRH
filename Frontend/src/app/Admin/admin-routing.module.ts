import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './Components/seller/seller.component';
import { AdminComponent } from './Components/admin/admin.component';
import { SellersListComponent } from './Components/sellers-list/sellers-list.component';
import { CategoryFormComponent } from './Components/category-form/category-form.component';
import { ProductformComponent } from './Components/productform/productform.component';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { ViewOrderComponent } from './Components/view-order/view-order.component';
import { StockFormComponent } from './Components/stock-form/stock-form.component';


const routes: Routes = [
  {
    path:'sellerHome',
    component:SellerComponent
  },
  {
    path:'adminHome',
    component:AdminComponent
  },  
  {
    path:'sellersList',
    component:SellersListComponent
  },
  {
    path:'categoryForm',
    component:CategoryFormComponent
  },
  {
    path:'productForm',
    component:ProductformComponent
  },
  {
    path:'orderList',
    component:OrderListComponent
  },
  {
    path:'viewOrder',
    component:ViewOrderComponent
  },
  {
    path:'stockForm',
    component:StockFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
