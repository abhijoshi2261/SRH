import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { cartItem, topSelling } from 'src/app/dataTypes';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  [x: string]: any;

  cartItems:any=[];
  subTotal: number = 0;


  constructor(private route: Router, private product:ProductServiceService,private user:UserService) {
    
    this.total();
  }

  ngOnInit() {
    this.total();
    this.getCartItems();
  }


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
    this.product.removeProduct(id);
        this.cartItems.splice(index,1);
        this.total();
  }

  total() {
    let subTotal = 0;
    this.subTotal = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      const element = this.cartItems[i];
      if (element.salePrice) { 
        let productTotal = element.quantity * element.salePrice;
        subTotal = subTotal + productTotal;
      } else {
        let productTotal = element.quantity * element.mrp;
        subTotal = subTotal + productTotal;
      }
    }

    this.subTotal = subTotal;
  }

  getCartItems(){
    this.product.getCartItems().subscribe((result:any)=>{
      result.quantity=1;
      this.cartItems=result;
      this.total();
    })
  }


  checkout(){

        if(this.cartItems.length>0){
          if(localStorage.getItem('customer')){
            this.route.navigate(['checkout']);
            this.product.addProductInOrder(this.cartItems);
          }else{
            alert('Please Login / Register before checkout');
            this.route.navigate(['login']);
          }
        }else{
          alert('You have to Add Atleast One Item in Cart');
          this.route.navigate(['productList']);
        }

  
  }


  addProduct(){
    this.route.navigate(['productList'])
  }

}
