import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  scrollIntoView(arg0: { behavior: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private user:UserService){}

  companyInfo = ['About Us', 'Our Stores', 'Contact Us', 'My Account'];

  email = this.user.email;

  customerService = [
    'Privacy Policy',
    'Refund Policy',
    'Shipping & Return',
    'Terms & Conditions',
    'Store Locations',
  ];

  shopByCategories = [
    'Groceries',
    'Bakery',
    'Dairy',
    'Beverages',
    'Snacks',
    'Condiments',
    'Cereals',
    'Detergents',
    'Frozen',
    'Personal Care',
    'Baby Products',
  ];
}
