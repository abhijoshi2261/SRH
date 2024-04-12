import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  show:boolean=false;
  showShippingAddress:boolean=false;
  isChecked:boolean=false;

  homeDelivery = new FormGroup({
    customerName: new FormControl('',[Validators.required]), 
    customerLastName: new FormControl('',[Validators.required]) ,
    mobileNo: new FormControl('',[Validators.required]) ,
    email: new FormControl('',[Validators.required]), 
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

load(val:any){
    console.log(val);
    if(val==='home'){
      this.show=true;
    }
    else{
      this.show=false;
    }
}

addressShow(){
  console.log(this.isChecked);
  this.showShippingAddress=this.isChecked;
}


}
