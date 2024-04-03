import { Component } from '@angular/core';
import { carousel, category, topSelling, weekTrending } from 'src/app/dataTypes';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  currentIndex: number = 0;

  carouselArr:carousel[]=[
    {image:'./assets/product1.jpeg', text:'TOP 10 MOST POPULAR Dairy Products offered by swadeshi VIP'},
    {image:'./assets/product2.jpeg', text:'Sample Text2'},
    {image:'./assets/product3.jpeg', text:'Sample Text3'},
    {image:'./assets/product4.jpeg', text:'Sample Text4'},
    {image:'./assets/product5.jpeg', text:'Sample Text5'},
  ];


  next() {
    this.currentIndex<this.carouselArr.length-1?this.currentIndex++:this.currentIndex=0;
    console.log(this.currentIndex);
    
  }

  prev() {
    this.currentIndex>0?this.currentIndex--:this.currentIndex=this.carouselArr.length-1;
    console.log(this.currentIndex);
  }


  // Categories Login Starts here


  
  categories:any[]=[
    {name:"Groceries",image:'./assets/grocery.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"Bakery",image:'./assets/bakery.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"Dairy",image:'./assets/dairy.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"Beverages",image:'./assets/beverages.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"Snacks",image:'./assets/snacks.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"Condiments",image:'./assets/condiments.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"Cereals",image:'./assets/cereals.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"Detergents",image:'./assets/detergents.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"Frozen",image:'./assets/frozen.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"Personal Care",image:'./assets/personlCare.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"Baby Products",image:'./assets/babyCare.png',productCount:2,altText:"Categoory Thumbnail Image"},

  ]

  weekTrending:weekTrending[]=[
    { id:1,image:'./assets/shampoo.jpg',name:'Shampoo',brand:'XYZ BRAND',salePrice:200,mrp:300,discount:2},
    { id:2,image:'./assets/perfume.jpg',name:'Perfume',brand:'XYZ BRAND',salePrice:null,mrp:900,discount:0},
    { id:3,image:'./assets/nivea combo.jpg',name:'nivea body care combo',brand:'XYZ BRAND',salePrice:1000,mrp:1500,discount:0},
    { id:4,image:'./assets/men shoes.jpg',name:'Comfortable Office Shoes with brown',brand:'XYZ BRAND',salePrice:1200,mrp:1800,discount:0},
    { id:5,image:'./assets/iphone.jpg',name:'IPhone 14 pro max red',brand:'XYZ BRAND',salePrice:105000,mrp:135000,discount:0},
  ]

  favouriteItem:boolean=false;

  addFavourite(){
    alert("product added to Favourites");
    this.favouriteItem=true;
  }

  addCart(){
    alert("product added to Cart");
  }



  topSelling:topSelling[]=[
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
