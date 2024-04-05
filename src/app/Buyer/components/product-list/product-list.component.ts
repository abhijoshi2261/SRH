import { Component } from '@angular/core';
import { topSelling } from 'src/app/dataTypes';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList:any=[];
  topTrending:any=[];
  constructor(private product:ProductServiceService){
    this.getProducts();
  }

  addFavourite(){
    alert("product added to Favourites");
    this.favouriteItem=true;
  }

  addCart(){
    alert("product added to Cart");
  }

  favouriteItem:boolean=false;


    getProducts(){
      this.product.getProducts().subscribe((result:any)=>{
          this.productList = result;
          console.log('ProductList',result);
          
      })
    }

}
