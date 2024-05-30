import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent {

  file!: File;
  fileUri:string = "";

  constructor(private product:ProductServiceService){}

  ngOnInit() {
    this.getCategories();
  }

  productForm = new FormGroup({
    productName : new FormControl('',[Validators.required]),
    productImage : new FormControl('',[Validators.required]),
    productCategory : new FormControl('',[Validators.required]),
    productBrand : new FormControl('',[Validators.required]),
    productSalePrice : new FormControl(''),
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
    data.productDiscount = ((data.productMrp - data.productSalePrice)/data.productMrp)*100;
    console.log('Discount Amount is ',data.productDiscount);
    
    this.product.addProducts(data, this.file);
  }

  categoryId:any;

  getCategory(event:Event){
    this.categoryId = event.target as HTMLSelectElement;
    console.log("Category Id",this.categoryId);
    
  }

  selectFile(event: any) {
    this.file = event.target.files.item(0);
  }

}


