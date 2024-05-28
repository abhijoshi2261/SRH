import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  constructor(private product:ProductServiceService, private route:Router){
  
  }

  orders:any;

  ngOnInit() {
    this.getOrders();
  }

  getOrders(){
    this.product.getOrderProducts().subscribe((res:any)=>{
      console.log("order is List ",res);
      this.orders=res;
      console.log("Assigned Orders ",this.orders);
      
    })
  } 

  viewOrder(id:any){
    console.log(id);
         this.route.navigate(['viewOrder'],id);
  }

}
