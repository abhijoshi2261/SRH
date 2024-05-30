import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  product: any = "";

  constructor(private http: HttpClient, private route: Router) { }

  addProducts(data: any, file: File) {
    //const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data; charset=utf-8');
    this.http.post('http://localhost:8080/product', data).subscribe((res: any) => {
      console.log("Addes Product", res);
      const productId = res.productId;
      console.log("Product Id : " + productId);
      const uploadImageData = new FormData();
      uploadImageData.append('productImage', file, file.name);

      this.http.post('http://localhost:8080/product/' + productId + '/image', uploadImageData).subscribe((res: any) => {
        console.log("Product Image response : ", res);
      });
    })
  }

  getProducts() {
    return this.http.get('http://localhost:8080/product');
  }

  getProductImage(productId: number) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    return this.http.get('http://localhost:8080/product/' + productId + '/image');
  }

  getProductById(id: any) {
    return this.http.get('http://localhost:8080/product/' + id);
  }

  addCategories(data: any) {
    this.http.post('http://localhost:3000/categories', data).subscribe((result: any) => {
      console.log('New Category', result);

    })
  }

  getCategories() {
    return this.http.get('http://localhost:3000/categories');
  }

  getTopTrending() {
    return this.http.get('http://localhost:8080/product?_limit=4');
  }

  getTopSelling() {
    return this.http.get('http://localhost:8080/product?_limit=10');
  }

  getCarousel() {
    return this.http.get('http://localhost:3000/carousel');
  }

  getCartById(id: number) {
    return this.http.get(`http://localhost:8080/cart/` + id);
  }

  deleteCart(cartId: any) {
    this.http.delete(`http://localhost:8080/cart/` + cartId).subscribe((res: any) => {
      console.log(res);

    })
  }

  addToCart(id: any) {

    let cartStr: any = localStorage.getItem("cart");
    let cart: any = JSON.parse(cartStr);
    if (cart) {
      console.log("Cart from localStorage : ", cart);
      console.log("typeoffff : ", typeof cart);
      console.log("Cart from localStorage - proudctIds : ", cart.productIds);
      cart.productIds.push(id);
      this.http.put(`http://localhost:8080/cart/` + cart.cartId, cart).subscribe((result: any) => {
        console.log("Cart:", result);
        localStorage.setItem("cart", JSON.stringify(result));
      });
    } else {
      this.http.post(`http://localhost:8080/cart`, id).subscribe((result: any) => {
        console.log("Cart:", result);
        localStorage.setItem("cart", JSON.stringify(result));
      })
    }
  }



  removeProduct(cartId: any, productId: any) {
    console.log("id is", cartId);

    console.log("id Type is", typeof (cartId));
    return this.http.delete(`http://localhost:8080/cart/` + cartId + '/product/' + productId).subscribe((result: any) => {
      console.log(result);

    })
    //  this.getCartLength();

  }

  orderedProducts: any;

  checkoutDetails(data: any) {
    console.log("Checkout Data", data);
    this.orderedProducts = data;
    console.log("Data in Service", this.orderedProducts);
  }

  userDetail: any;
  orderDetails: any = [];

  getCheckOutData(data: any) {
    console.log("Data in Service2", this.orderedProducts);
    console.log("user Details2", data);
    this.userDetail = data;
    let cartStr: any = localStorage.getItem("cart");
    let cart: any = JSON.parse(cartStr);
    this.orderDetails.push(cart.products);
    // this.addProductInOrder();
    // this.addProductInOrder(this.orderedProducts,this.userDetail)
    // this.orderDetails.push(this.orderedProducts);
    this.orderDetails.push(this.userDetail);
    this.orderDetails.push(this.orderedProducts.finalTotal);
    // this.orderDetails = this.userDetail;
    // this.addProductInOrder();
  }

  addProductInOrder() {

    console.log("User3", this.userDetail);
    console.log("product3", this.orderedProducts);
    console.log("Final Details", this.orderDetails);

    console.log('data before post', this.orderDetails);
    this.http.get('http://localhost:3000/order', { observe: 'response' }).subscribe((res: any) => {
      console.log("Ordered Products", res);
      if (res) {
        console.log('order is Empty');
        this.http.post('http://localhost:3000/order', this.orderDetails).subscribe((result: any) => {
          console.log('posted', result);
        })

      } else {
        console.log('order is present');
        this.http.get('http://localhost:3000/order').subscribe((out: any) => {
          console.log('saved order id', out[0].id);
          console.log('data before put', this.orderDetails);
          this.http.delete(`http://localhost:3000/order/${out[0].id}`, this.orderDetails).subscribe((final: any) => {
            console.log('Delete Data', final);
          })
          this.http.post('http://localhost:3000/order', this.orderDetails).subscribe((result: any) => {
            console.log('posted', result);
          })
        })
      }
    })

  }

  getOrderProducts() {
    return this.http.get('http://localhost:3000/order');
  }

  getOrder(id: any) {
    return this.http.get(`http://localhost:3000/order/${id}`);
  }

}
