import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Buyer/components/cart/cart.component';
import { ProductListComponent } from './Buyer/components/product-list/product-list.component';
import { BuyerHomeComponent } from './Buyer/components/buyer-home/buyer-home.component';
import { SignInComponent } from './userForms/sign-in/sign-in.component';
import { AuthGuard } from './services/auth-guard.guard';
import {AdminModule} from './Admin/admin.module'
import { FooterComponent } from './Buyer/components/footer/footer.component';


const routes: Routes = [
  {
    path:'',
    component:SignInComponent
  },
  {path:'buyerHome',
  component:BuyerHomeComponent,
  // canActivate:[AuthGuard]
  },
  {
    path:'addCart',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
