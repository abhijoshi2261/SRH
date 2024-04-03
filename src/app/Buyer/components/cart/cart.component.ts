import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cartItem, topSelling } from 'src/app/dataTypes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  [x: string]: any;

  constructor(private route: Router) {}

  ngOnInit() {
    this.total();
  }

  favouriteItem: boolean = false;
  subTotal: number = 0;

  addFavourite() {
    alert('product added to Favourites');
    this.favouriteItem = true;
  }

  deleteItems() {
    alert('product deleted from Cart');
    this.route.navigate(['produtList']);
  }

  add(index: number, val: number, price: number) {
    this.cartItems[index].quantity++;
    this.total();
  }

  remove(index: number, val: number, price: number) {
    if (val > 1) {
      this.cartItems[index].quantity--;
      this.total();
    }
  }

  viewProduct() {
    this.route.navigate(['produtList']);
  }

  total() {
    let subTotal = 0;
    this.subTotal = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      const element = this.cartItems[i];
      if (element.salePrice) { 
        let productTotal = element.quantity * element.salePrice;
        subTotal = subTotal + productTotal;
        console.log('This is SubTotal', this.subTotal);
        console.log('This is sellPrice', element.salePrice);
      } else {
        let productTotal = element.quantity * element.mrp;
        subTotal = subTotal + productTotal;
      }
    }

    this.subTotal = subTotal;
  }

  cartItems: cartItem[] = [
    {
      id: 1,
      image: './assets/shampoo.jpg',
      name: 'Shampoo',
      brand: 'XYZ BRAND',
      salePrice: 200,
      mrp: 300,
      discount: 2,
      quantity: 1,
    },
    {
      id: 2,
      image: './assets/perfume.jpg',
      name: 'Perfume',
      brand: 'XYZ BRAND',
      salePrice: null,
      mrp: 900,
      discount: 0,
      quantity: 1,
    },
    {
      id: 3,
      image: './assets/nivea combo.jpg',
      name: 'nivea body care combo',
      brand: 'XYZ BRAND',
      salePrice: 1000,
      mrp: 1500,
      discount: 0,
      quantity: 1,
    },
  ];
}
