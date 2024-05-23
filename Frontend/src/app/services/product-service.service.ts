import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  product:any="";
  cartLength = new BehaviorSubject<number>(0);
  cartLengthValue = this.cartLength.asObservable();


  constructor(private http:HttpClient,private route:Router) {}

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

  getCartLength() {
    this.getCartItems().subscribe((result: any) => {
      if (result.length >= 0) {
        this.cartLength.next(result.length);
        console.log('CartLengthValue', this.cartLengthValue);
      }
    });
  }


  addToCart(id:any){
    // console.log("Product index is ",id);
    
    this.http.get(`http://localhost:3000/products?id=${id}`,{observe:'response'}).subscribe((result:any)=>{
      // console.log("Selected Product",result.body[0]);
      this.product = result.body[0];
      this.product.quantity=1;
      this.addProduct();
    })
    
  }

  addProduct(){
    // console.log("Product in Cart",this.product);
    
    this.http.post('http://localhost:3000/cart',this.product).subscribe((result:any)=>{
      // this.product.quantity=1;
      // console.log("cartItems",result);
    this.getCartLength();

    })
  }


  removeProduct(id:any){
   return this.http.delete(`http://localhost:3000/cart/${id}`).subscribe((result:any)=>{
      this.getCartLength();
   })
  //  this.getCartLength();
  }

    orderedProducts:any;

  addProductInOrder(data:any){
      console.log('data before post',data);
      
    this.http.get('http://localhost:3000/order',{observe:'response'}).subscribe((res:any)=>{
      console.log("Ordered Products",res);
      if(res){
        console.log('order is Empty');
        this.http.post('http://localhost:3000/order',data).subscribe((result:any)=>{
          console.log('posted',result);
        })
        
      }else{
        console.log('order is present');
        this.http.get('http://localhost:3000/order').subscribe((out:any)=>{
          console.log('saved order id',out[0].id);
          console.log('data before put',data);
          
          this.http.put(`http://localhost:3000/order/${out[0].id}`,data).subscribe((final:any)=>{
            console.log('Put Data',final);
            
          })
        })

      }
    })
    
    
  }

  getOrderProducts(){
     return this.http.get('http://localhost:3000/order');
    // return this.orderedProducts;
  }

}
