import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Buyer/components/cart/cart.component';
import { ProductListComponent } from './Buyer/components/product-list/product-list.component';
import { BuyerHomeComponent } from './Buyer/components/buyer-home/buyer-home.component';
import { SignInComponent } from './userForms/sign-in/sign-in.component';
import { AuthGuard } from './services/auth-guard.guard';
import {AdminModule} from './Admin/admin.module'
import { FooterComponent } from './Buyer/components/footer/footer.component';
import { CheckboxRequiredValidator } from '@angular/forms';
import { CheckoutComponent } from './Buyer/components/checkout/checkout.component';


const routes: Routes = [
  {
    path:'login',
    component:SignInComponent
  },
  {path:'',
  component:BuyerHomeComponent,
  // canActivate:[AuthGuard]
  },
  {
    path:'cartListing',
    component:CartComponent
  },
  {
    path:'productList',
    component:ProductListComponent
  },
  {
    path:'admin',loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
