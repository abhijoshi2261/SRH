import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/products');
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

}
