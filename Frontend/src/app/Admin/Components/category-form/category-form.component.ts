import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {

  constructor(private product:ProductServiceService){}


  categoryForm = new FormGroup({
    categoryName : new FormControl('',[Validators.required]),
    categoryImage : new FormControl('',[Validators.required])
  })

  get categoryControls(){
   return this.categoryForm.controls;
  }


  categories(data:any){
      // this.product.addCategories(data);
      console.log("Category Form Data", data);
      
  }

}
