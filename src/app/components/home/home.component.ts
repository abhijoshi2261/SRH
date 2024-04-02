import { Component } from '@angular/core';
import { carousel } from 'src/app/dataTypes';


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
    {name:"grocery",image:'./assets/logo.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"grocery",image:'./assets/logo.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"grocery",image:'./assets/logo.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"grocery",image:'./assets/logo.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"grocery",image:'./assets/logo.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"grocery",image:'./assets/logo.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"grocery",image:'./assets/logo.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"grocery",image:'./assets/logo.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"grocery",image:'./assets/logo.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"grocery",image:'./assets/logo.png',productCount:2,altText:"Categoory Thumbnail Image"},
    {name:"grocery",image:'./assets/logo.png',productCount:2,altText:"Categoory Thumbnail Image"},

  ]

}
