import { Component } from '@angular/core';
import { carousel } from 'src/app/dataTypes';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {

  currentIndex: number = 0;

  carouselArr:carousel[]=[
    {image:'./assets/product1.jpeg', text:'Sample Text1'},
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

}
