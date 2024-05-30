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
    this.product.getOrderProducts().subscribe((res:any)=>{
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
      let cartStr:any = localStorage.getItem("cart");
      let cart = JSON.parse(cartStr);
      console.log("Final Cart is",cart);
      console.log("cartId is ",cart.cartId);
      
      this.product.deleteCart(cart.cartId);
    }

}
