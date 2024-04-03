import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  companyInfo = ['About Us', 'Our Stores', 'Contact Us', 'My Account'];

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
