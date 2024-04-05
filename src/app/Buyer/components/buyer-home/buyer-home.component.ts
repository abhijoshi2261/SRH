import { Component } from '@angular/core';
import { carousel, topSelling, weekTrending } from 'src/app/dataTypes';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent {

  constructor(private product:ProductServiceService){
    this.getCategories();
    this.getTopTrending();
    this.getTopSelling();
    this.getCarousel();
  }


  ngOnInit():void{
    setInterval(()=>{
      this.next();
    },3000);
  }

  currentIndex: number = 0;
  categories:any;
  topTrending:any;
  topSelling:any;
  carouselArr:any=[];


  next() {
    this.currentIndex<this.carouselArr.length-1?this.currentIndex++:this.currentIndex=0;
    console.log(this.currentIndex);
    
  }

  prev() {
    this.currentIndex>0?this.currentIndex--:this.currentIndex=this.carouselArr.length-1;
    console.log(this.currentIndex);
  }
    

    getCarousel(){
      this.product.getCarousel().subscribe((result)=>{
        this.carouselArr=result;
      })
    }


    getCategories(){
      this.product.getCategories().subscribe((result)=>{
        this.categories=result;
      })
    }

    getTopTrending(){
      this.product.getTopTrending().subscribe((result)=>{
        console.log("Top Trending Products",result);
        this.topTrending=result;
      })
    }

    getTopSelling(){
      this.product.getTopSelling().subscribe((result)=>{
        console.log("Top Selling Products",result);
        this.topSelling=result;
      })
    }

  favouriteItem:boolean=false;

  addFavourite(){
    alert("product added to Favourites");
    this.favouriteItem=true;
  }

  addCart(){
    alert("product added to Cart");
  }



}
