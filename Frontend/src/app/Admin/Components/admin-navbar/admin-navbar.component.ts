import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {

  constructor(private route:Router){}

  logout(){
    alert('logout function called!');
    this.route.navigate(['']);
    localStorage.removeItem('admin');

  }

  sellerVerification(){
    if(localStorage.getItem('seller')){
      console.log("Seller is Available");
    }else{
      console.log("Seller is Unavailable");
      
    }
  }

}
