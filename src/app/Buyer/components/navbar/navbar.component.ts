import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { BuyerHomeComponent } from '../buyer-home/buyer-home.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  [x: string]: any;

  constructor(private user: UserService, private route: Router) {}

  userIn: boolean = false;

  displayCategory = false;

  phoneNumber = '+222-1800-2628';
  // email = 'ketan.sutar@amelioratesolutions.com';
  email = this.user.email;

  showCategory() {
    this.displayCategory = !this.displayCategory;
  }

  logout() {
    alert('logout function called!');
    this.route.navigate(['']);
    localStorage.removeItem('admin');
  }

  scrollTO(){
    window.scrollTo(0,10000);
    // alert('scroll to called');
  }


}
