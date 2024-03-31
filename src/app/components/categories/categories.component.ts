import { Component } from '@angular/core';
import { category } from 'src/app/dataTypes';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

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
