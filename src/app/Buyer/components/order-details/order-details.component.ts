import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  constructor(private product:ProductServiceService){}

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
    
    
  }
  orderItems:any;

  // getOrderItems(){
  //   this.product.getOrderProducts().subscribe((res:any)=>{
  //     this.orderItems = res;
  //   })
  // }

  // getOrderItems(){
  //   this.product.getCartItems().subscribe((res:any)=>{
  //     this.orderItems = res;
  //   })
  // }

    print(){
      window.print();
    }

}
