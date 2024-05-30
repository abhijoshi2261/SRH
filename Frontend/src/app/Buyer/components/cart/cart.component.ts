import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { cartItem, topSelling } from 'src/app/dataTypes';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserService } from 'src/app/services/user.service';
import { order } from 'src/app/dataTypes'
import { getLocaleFirstDayOfWeek } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  [x: string]: any;

  cart: any;
  products: any = [];
  priceTotal: number = 0;


  constructor(private route: Router, private productService: ProductServiceService, private user: UserService) {
    this.calculatePriceTotal();
  }

  ngOnInit() {
    this.calculatePriceTotal();
    this.getCartItems();
  }


  add(index: number, val: number) {
    this.products[index].productQuantity++;
    this.calculatePriceTotal();
  }

  remove(index: number, val: number) {
    if (val > 1) {
      this.products[index].productQuantity--;
      this.calculatePriceTotal();
    }
  }

  viewProduct() {
    this.route.navigate(['produtList']);
    alert('View Product Called')
  }

  deleteItems(productId: any, index: any) {
    // alert('product deleted from Cart');
  console.log("Delted id:",productId);
    let cartStr:any=localStorage.getItem("cart");
    let cart = JSON.parse(cartStr);
    let cartId =cart.cartId;
    console.log("cart id:",cartId);
    this.productService.removeProduct(cartId,productId);
    this.products.splice(index, 1);
    this.calculatePriceTotal();
    console.log(cart);
    
  }

  calculatePriceTotal() {
    let subTotal = 0;
    this.priceTotal = 0;

    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.productSalePrice) {
        let productTotal = element.productQuantity * element.productSalePrice;
        subTotal = subTotal + productTotal;
      } else {
        let productTotal = element.productQuantity * element.productMrp;
        subTotal = subTotal + productTotal;
      }
    }
    this.priceTotal = subTotal;
  }

  getCartItems() {

    let cartStr: any = localStorage.getItem("cart");
    let cart: any = JSON.parse(cartStr);
    if (cart) {
      console.log("Cart from localStorage : ", cart);
      this.productService.getCartById(cart.cartId).subscribe((result: any) => {
        console.log('response from backend : ', result);
        this.cart = result;
        const productIds: any = cart.productIds;
        for (var i = 0; i < productIds.length; i++) {
          this.productService.getProductById(productIds[i]).subscribe((result: any) => {
            console.log('response from backend : ', result);
            result['productQuantity'] = 1;
              this.products.push(result);
             cart.products = this.products;
            
            localStorage.setItem("cart",JSON.stringify(cart));
            this.calculatePriceTotal();
          });
        }

      })

    }

  }

  orderDetail!: any;

  checkout() {
    console.log('type of order', typeof (this.orderDetail));

    if (this.products.length > 0) {
      if (localStorage.getItem('customer')) {
        this.route.navigate(['checkout']);
        this.orderDetail = this.products;
        this.orderDetail.finalTotal = this.priceTotal;
        this.productService.checkoutDetails(this.orderDetail);
        console.log("cart items are", this.products);
        console.log(this.priceTotal);
        console.log("Data to be send", this.orderDetail);



      } else {
        alert('Please Login / Register before checkout');
        this.route.navigate(['login']);
      }
    } else {
      alert('You have to Add Atleast One Item in Cart');
      this.route.navigate(['productList']);
    }

  }


  addProduct() {
    this.route.navigate(['productList'])
  }

}
