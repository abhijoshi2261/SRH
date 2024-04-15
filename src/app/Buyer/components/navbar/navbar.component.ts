import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { BuyerHomeComponent } from '../buyer-home/buyer-home.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  [x: string]: any;

  userIn: boolean = false;

  displayCategory = false;

  phoneNumber = '+222-1800-2628';
  // email = 'ketan.sutar@amelioratesolutions.com';
  email = this.user.email;
  showCount:boolean=false;
  cartCount: number = 0;

  constructor(
    private user: UserService,
    private route: Router,
    private product: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.product.cartLengthValue.subscribe((result: number) => {
      this.cartCount = result;
      if(result>0){
        this.showCount=true;
      }else{
        this.showCount=false;
      }
    });

  }

  showCategory() {
    this.displayCategory = !this.displayCategory;
  }

  logout() {
    alert('logout function called!');
    this.route.navigate(['']);
    localStorage.removeItem('admin');
    localStorage.removeItem('customer');
  }

  scrollTO() {
    window.scrollTo(0, 10000);
    // alert('scroll to called');
  }
}
