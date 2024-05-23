import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  constructor(private product:ProductServiceService, private route:ActivatedRoute, private user:UserService){
    console.log(route.pathFromRoot[1].snapshot.url[0].path);
    
  }

  data: any=localStorage.getItem('customer');
  customerDetails: any;

  ngOnInit() {
    // console.log(typeof(this.customerDetails));
    // this.getOrderItems();
    console.log(typeof this.data);
    console.log("Before parsing");
    console.log(this.data);
    this.customerDetails=JSON.parse(this.data);
    console.log('After parsing.....')
    console.log(typeof this.customerDetails)
    console.log(this.customerDetails);
    this.getOrderItems();
    this.getUser();
    
  }
  orderItems:any=[];
  finalData:any;

  getOrderItems(){
    this.product.getOrderProducts().subscribe((res:any)=>{
      this.orderItems = res;
      console.log("Data Retrieved",this.orderItems);
      console.log('type of data',typeof(this.orderItems));

      this.finalData = this.orderItems[0];
      console.log('Final Output',this.finalData);

      console.log('after for loop',this.finalData);
    })
      
  }

  // getOrderItems(){
  //   this.product.getCartItems().subscribe((res:any)=>{
  //     this.orderItems = res;
  //   })
  // }
  userDetail:any;
  getUser(){
    this.user.getUserDetails().subscribe((res:any)=>{
     console.log('res',typeof(res));
     console.log(res[0]);
     this.userDetail=res[0];
    //  if(this.userDetail.shippingAddressLine1){
    //   console.log('shipping Confirm');
    //  }else{
    //   console.log('shipping Absent');
      
    //  }
    })
  }

    print(){
      window.print();
    }

}
