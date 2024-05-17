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

  data=JSON.stringify(localStorage.getItem('customer'));
  customerDetails=JSON.parse(this.data);

  ngOnInit() {
    console.log(this.customerDetails);
    this.getOrderItems();
  }
  orderItems:any;

  // getOrderItems(){
  //   this.product.getOrderProducts().subscribe((res:any)=>{
  //     this.orderItems = res;
  //   })
  // }

  getOrderItems(){
    this.product.getCartItems().subscribe((res:any)=>{
      this.orderItems = res;
    })
  }

    print(){
      window.print();
    }

}
