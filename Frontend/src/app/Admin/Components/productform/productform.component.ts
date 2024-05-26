import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent {

  constructor(private product:ProductServiceService){}

  ngOnInit() {
    this.getCategories();
  }

  productForm = new FormGroup({
    productName : new FormControl('',[Validators.required]),
    productImage : new FormControl('',[Validators.required]),
    productCategory : new FormControl('',[Validators.required]),
    productBrand : new FormControl('',[Validators.required]),
    productSaleprice : new FormControl(''),
    productMrp : new FormControl('',[Validators.required]),
    productDiscount : new FormControl(''),
    productDescription : new FormControl('')
  })


  get productControls(){
    return this.productForm.controls;
  }

  categories:any;

  

  getCategories(){
    this.product.getCategories().subscribe((result:any)=>{
      console.log("List of Categories",result);
      this.categories=result;

    })
  }

  addProduct(data:any){
    console.log("Product From Data",data);
    this.product.addProducts(data);
  }

}


