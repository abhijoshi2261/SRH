import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cartItem, topSelling } from 'src/app/dataTypes';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  [x: string]: any;

  constructor(private route: Router, private product:ProductServiceService) {
    
    this.total();
  }

  ngOnInit() {
    this.total();
    this.getCartItems();
  }

  subTotal: number = 0;

  add(index: number, val: number) {
    this.cartItems[index].quantity++;
    this.total();
  }

  remove(index: number, val: number) {
    if (val > 1) {
      this.cartItems[index].quantity--;
      this.total();
    }
  }

  viewProduct() {
    this.route.navigate(['produtList']);
    alert('View Product Called')
  }


  deleteItems(id:any,index:any) {
    // alert('product deleted from Cart');
    this.product.removeProduct(id).subscribe((result:any)=>{
        console.log("after Delete", result);
        this.cartItems.splice(index,1);
    })

    // this.cartItems.pop(id);
    
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

  cartItems:any=[]
  getCartItems(){
    this.product.getCartItems().subscribe((result:any)=>{
      console.log("Cart Items",result);
      result.quantity=1;
      this.cartItems=result;
      console.log("Final Response",this.cartItems);
      this.total();
      
    })
  }


  checkout(){
    alert('Do you want to continue with Cart?');
    this.route.navigate(['checkout']);
  }
}
