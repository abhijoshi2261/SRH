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

  addProducts(data:any){
    this.http.post('http://localhost:3000/products',data).subscribe((res:any)=>{
      console.log("Addes Product",res);
    })
  }

  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }

  addCategories(data:any){
    this.http.post('http://localhost:3000/categories',data).subscribe((result:any)=>{
      console.log('New Category',result);
      
    })
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
      this.product.productQuantity=1;
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

    checkoutDetails(data:any){
      console.log("Checkout Data",data);
      this.orderedProducts=data;
      console.log("Data in Service",this.orderedProducts);
    }
     
    userDetail:any;
    orderDetails:any=[];

    getCheckOutData(data:any){
      console.log("Data in Service2",this.orderedProducts);
      console.log("user Details2",data);
      this.userDetail=data;
      // this.addProductInOrder();
      // this.addProductInOrder(this.orderedProducts,this.userDetail)
      this.orderDetails.push(this.orderedProducts);
      this.orderDetails.push(this.userDetail);
      this.orderDetails.push(this.orderedProducts.finalTotal);
      // this.orderDetails = this.userDetail;
    }

  addProductInOrder(){

    console.log("User3",this.userDetail);
    console.log("product3",this.orderedProducts);
    console.log("Final Details",this.orderDetails);
    
      console.log('data before post',this.orderDetails);
    this.http.get('http://localhost:3000/order',{observe:'response'}).subscribe((res:any)=>{
      console.log("Ordered Products",res);
      if(res){
        console.log('order is Empty');
        this.http.post('http://localhost:3000/order',this.orderDetails).subscribe((result:any)=>{
          console.log('posted',result);
        })
        
      }else{
        console.log('order is present');
        this.http.get('http://localhost:3000/order').subscribe((out:any)=>{
          console.log('saved order id',out[0].id);
          console.log('data before put',this.orderDetails);      
          this.http.delete(`http://localhost:3000/order/${out[0].id}`,this.orderDetails).subscribe((final:any)=>{
            console.log('Delete Data',final);
          })
          this.http.post('http://localhost:3000/order',this.orderDetails).subscribe((result:any)=>{
          console.log('posted',result);
        })
        })
      }
    })
    
  }

  getOrderProducts(){
     return this.http.get('http://localhost:3000/order');
  }

}
