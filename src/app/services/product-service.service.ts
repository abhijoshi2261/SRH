import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient,private route:Router) {this.addProduct }

  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }

  getCategories(){
    return this.http.get('http://localhost:3000/categories');
  }

  getTopTrending(){
    return this.http.get('http://localhost:3000/products?_limit=4');
  }

  getTopSelling(){
    return this.http.get('http://localhost:3000/products?_limit=10');
  }

  getCarousel(){
    return this.http.get('http://localhost:3000/carousel');
  }

  getCartItems(){
    return this.http.get(`http://localhost:3000/cart`);
  }

  product:any="";

  addToCart(id:any){
    console.log("Product index is ",id);
    
    this.http.get(`http://localhost:3000/products?id=${id}`,{observe:'response'}).subscribe((result:any)=>{
      console.log("Selected Product",result.body[0]);
      this.product = result.body[0];
      this.product.quantity=1;
      this.addProduct();
    })
    
  }

  addProduct(){
    console.log("Product in Cart",this.product);
    
    this.http.post('http://localhost:3000/cart',this.product).subscribe((result:any)=>{
      // this.product.quantity=1;
      console.log("cartItems",result);
    })
  }


  removeProduct(id:any){
   return this.http.delete(`http://localhost:3000/cart/${id}`);
  }

}
