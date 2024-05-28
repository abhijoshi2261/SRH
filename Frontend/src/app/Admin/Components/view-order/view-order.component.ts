import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import {IndianNumberPipe} from 'src/app/indian-number.pipe'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent {

  productId:any;

  constructor(private route: ActivatedRoute, private product:ProductServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id']; // '+' operator converts string to number
      // Fetch product details using this.productId
    });
    this.getOrderItems();
  }

  getOrder(){
    this.product.getOrder(this.productId).subscribe((result:any)=>{
      console.log("View Product Details",result);
      this.orderItems=result;
    })
  }

  orderItems:any=[];
  finalData:any;
  finalAmount:any;
  userDetail:any;
  length:any;
  orderDate:any;
  deliveryDate:any;
  orderNumber:any;
  getOrderItems(){
    this.product.getOrder(this.productId).subscribe((res:any)=>{
      this.orderItems = res;
      console.log("Data Retrieved",this.orderItems);
      console.log('type of data',typeof(this.orderItems));
      console.log('Length of Orders: ',this.orderItems.length);
      
      

      this.finalData = this.orderItems[this.orderItems.length-1];
      this.userDetail = this.finalData[1];
      console.log('Final Output',this.finalData);
      console.log('User Details',this.userDetail);
      
      this.finalAmount=this.finalData[2];
      this.orderDate = this.finalData[1].date;
      this.deliveryDate = new Date(this.finalData[1].date);
      this.deliveryDate.setDate( this.deliveryDate.getDate() + 3 );
      this.orderNumber=this.finalData[1].orderNumber;
    console.log('final Amount is:',this.finalAmount);
    console.log("Order Date is ",this.orderDate);
    console.log("Order Number:",this.orderNumber);
    
    

    })
      
  }

  print(){
    window.print();
  }

}
