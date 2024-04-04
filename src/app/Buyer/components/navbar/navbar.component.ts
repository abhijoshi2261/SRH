import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
[x: string]: any;

  userIn:boolean=false;

 displayCategory=false;

  phoneNumber="+222-1800-2628";
  email='blueskytechcompany@gmail.com';

  showCategory(){
    this.displayCategory= !this.displayCategory;
  }

}
