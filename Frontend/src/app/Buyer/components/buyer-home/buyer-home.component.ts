import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { carousel, topSelling, weekTrending } from 'src/app/dataTypes';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent {

  constructor(private productService:ProductServiceService){
    this.getCategories();
    this.getTopTrending();
    this.getProduct();
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
  products:any = [];
  carouselArr:any=[];


  next() {
    this.currentIndex<this.carouselArr.length-1?this.currentIndex++:this.currentIndex=0;
    // console.log(this.currentIndex);
    
  }

  prev() {
    this.currentIndex>0?this.currentIndex--:this.currentIndex=this.carouselArr.length-1;
    // console.log(this.currentIndex);
  }
    

    getCarousel(){
      this.productService.getCarousel().subscribe((result)=>{
        this.carouselArr=result;
      })
    }


    getCategories(){
      this.productService.getCategories().subscribe((result)=>{
        this.categories=result;
      })
    }

    getTopTrending(){
      this.productService.getTopTrending().subscribe((result)=>{
        // console.log("Top Trending Products",result);
        this.topTrending=result;
      })
    }

    getProduct(){
      this.productService.getProducts().subscribe((result:any)=>{
        this.products = result;
        for(var i = 0; i < this.products.length; i++) {
          const productElement = this.products[i];
          this.productService.getProductImage(productElement.productId).subscribe((imgResponse:any)=>{
            console.log(imgResponse);
            if (imgResponse) {
              console.log("Image is not null", imgResponse);
              const base64Data:any = imgResponse.picByte;
              const imgData = 'data:image/jpeg;base64,' + base64Data;
              productElement.productImageSrc = imgData;
            }
          }
        );
        }
      });
    }

    // getTopSelling(){
    //   this.productService.getTopSelling().subscribe((result)=>{
    //     // console.log("Top Selling Products",result);
    //     this.topSelling=result;
    //   })
    // }

  favouriteItem:boolean=false;

  addFavourite(){
    alert("product added to Favourites");
    this.favouriteItem=true;
  }

  addToCart(item:any){
      console.log("Item",item);
      this.productService.addToCart(item);
      
  }



}
