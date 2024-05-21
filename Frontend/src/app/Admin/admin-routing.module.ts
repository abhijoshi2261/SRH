import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './Components/seller/seller.component';
import { AdminComponent } from './Components/admin/admin.component';

const routes: Routes = [
  {
    path:'sellerHome',
    component:SellerComponent
  },
  {
    path:'adminHome',
    component:AdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
