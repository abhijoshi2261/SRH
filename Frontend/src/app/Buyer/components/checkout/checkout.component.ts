import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/services/email-regex';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  show:boolean=false;
  message="";
  showShippingAddress:boolean=false;
  isChecked:boolean=false;
  cartItems:any[]=[];

  constructor(private product:ProductServiceService, private route:Router, private user:UserService){}

  //  customerFirstName = document.getElementById('firstName');


  homeDelivery = new FormGroup({
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    email : new FormControl('',Validators.compose([emailValidator,Validators.required])),
    mobileNo : new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]), 
    billingAddressLine1: new FormControl('',[Validators.required]) ,
    billingAddressLine2: new FormControl('',[Validators.required]) ,
    billingAddressLine3: new FormControl('',[Validators.required]) ,
    billingAddressCity: new FormControl('',[Validators.required]) ,
    billingAddressState: new FormControl('',[Validators.required]),
    shippingAddressLine1: new FormControl('',[Validators.required]),
    shippingAddressLine2: new FormControl('',[Validators.required]),
    shippingAddressLine3: new FormControl('',[Validators.required]),
    shippingAddressCity: new FormControl('',[Validators.required]),
    shippingAddressState: new FormControl('',[Validators.required]),
    shippingCheck: new FormControl('',[]),
  })

  get homeDeliveryControls(){
    return this.homeDelivery.controls
  }

  storePickup = new FormGroup({
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    email : new FormControl('',Validators.compose([emailValidator,Validators.required])),
    mobileNo : new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    date: new FormControl('',[Validators.required])
  })


  get storePickupControls(){
    return this.storePickup.controls
  }

load(val:any){
    console.log(val);
    if(val==='home'){
      this.message="home";
      this.show=true;
    }
    else{
      this.message="store";
      this.show=false;
    }
}

addressShow(){
  console.log(this.isChecked);
  this.showShippingAddress=this.isChecked;
}

getCartItems(){
  this.product.getCartItems().subscribe((result:any)=>{
    // this.cartItems=result;
    console.log(result);
    
  })
}

products:any;

order(data:any){
  data.role='customer';
  if(this.storePickup.valid){
    alert("Your Order Has been placed");
  }else{
    this.storePickup.markAllAsTouched();
    console.log('form is not submitted');
  }
  
  console.log(data.role);
  
  
}

orderedProducts:any;

userDetails:any;

getOrderedProduct(data:any){
  this.product.getOrderProducts().subscribe((result:any)=>{
    console.log("Checkout Products",result);
    this.orderedProducts=result;
    this.route.navigate(['payments']);
  })
  // this.route.navigate(['payments']);
  this.userDetails=data;
  console.log("formData",this.userDetails);
  this.user.userDetails(this.userDetails);
  
}


}
