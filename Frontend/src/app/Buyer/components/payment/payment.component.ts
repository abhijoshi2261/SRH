import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private route:Router){

  }

  ngOnInit() {
    setTimeout(() => {
      this.route.navigate(['orderDetails'])
    }, 5000);
  }

}
