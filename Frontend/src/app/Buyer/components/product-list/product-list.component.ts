import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { topSelling } from 'src/app/dataTypes';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList: any = [];
  topTrending: any = [];
  constructor(private productService: ProductServiceService, private route: Router) {
    this.getProducts();
  }

  addFavourite() {
    alert("product added to Favourites");
    this.favouriteItem = true;
  }

  addToCart(item: any) {
    let cartStr: any = localStorage.getItem("cart");
    let cart = JSON.parse(cartStr);
    let id = item;
    if (cart) {
      if (this.productService.getProductById(item)) {
        console.log('Product is Present');
        console.log(cart);
        for (let i = 0; i < cart.products.length; i++) {
          console.log("for Loop Executed");
          console.log('product are', cart.products[i]);
          console.log('received id:', id);


          if (cart.products[i].productId == item) {
            console.log("if Executed");
            console.log("Product Name", cart.products[i].productName);
            cart.products[i].productQuantity++;
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log('New Quantity', cart.products[i].productQuantity);
            this.route.navigate(['cartListing']);
          } else {
            console.log("product Absent in Cart");
            this.productService.addToCart(id);
            console.log("id is", id);
            console.log("Product Added", cart);
            this.route.navigate(['cartListing']);
          }

        }

      }

    }
  }

  favouriteItem: boolean = false;


  getProducts() {
    this.productService.getProducts().subscribe((result: any) => {
      this.productList = result;
      console.log('ProductList', result);

    })
  }

}
