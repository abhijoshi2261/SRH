import { Component } from '@angular/core';
import { topSelling } from 'src/app/dataTypes';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  addFavourite(){
    alert("product added to Favourites");
    this.favouriteItem=true;
  }

  addCart(){
    alert("product added to Cart");
  }

  favouriteItem:boolean=false;;

  productList:topSelling[]=[
    { image:'./assets/shampoo.jpg',name:'Shampoo',brand:'XYZ BRAND',salePrice:200,mrp:300,discount:2},
    { image:'./assets/perfume.jpg',name:'Perfume',brand:'XYZ BRAND',salePrice:null,mrp:900,discount:0},
    { image:'./assets/nivea combo.jpg',name:'nivea body care combo',brand:'XYZ BRAND',salePrice:1000,mrp:1500,discount:0},
    { image:'./assets/men shoes.jpg',name:'Comfortable Office Shoes with brown',brand:'XYZ BRAND',salePrice:1200,mrp:1800,discount:0},
    { image:'./assets/iphone.jpg',name:'IPhone 14 pro max red',brand:'XYZ BRAND',salePrice:105000,mrp:135000,discount:0},
    { image:'./assets/shampoo.jpg',name:'Shampoo',brand:'XYZ BRAND',salePrice:200,mrp:300,discount:2},
    { image:'./assets/perfume.jpg',name:'Perfume',brand:'XYZ BRAND',salePrice:null,mrp:900,discount:0},
    { image:'./assets/nivea combo.jpg',name:'nivea body care combo',brand:'XYZ BRAND',salePrice:1000,mrp:1500,discount:0},
    { image:'./assets/men shoes.jpg',name:'Comfortable Office Shoes with brown',brand:'XYZ BRAND',salePrice:1200,mrp:1800,discount:0},
    { image:'./assets/iphone.jpg',name:'IPhone 14 pro max red',brand:'XYZ BRAND',salePrice:105000,mrp:135000,discount:0},
  ]

}
