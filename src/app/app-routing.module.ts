import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Buyer/components/home/home.component';
import { CartComponent } from './Buyer/components/cart/cart.component';
import { ProductListComponent } from './Buyer/components/product-list/product-list.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent
  },
  {
    path:'addCart',
    component:CartComponent
  },
  {
    path:'productList',
    component:ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
