import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SRH';

  constructor(private Aroute:ActivatedRoute,private router:Router){
    // console.log(this.route.pathFromRoot[1].snapshot.url[0].path);
    
  }

  active:any;


  ngOnInit() {
    this.router.events.subscribe((routerEvent) => {
        if(routerEvent instanceof NavigationEnd) {
            // Get your url
            console.log(routerEvent.url);

            if(routerEvent.url == '/orderDetails'){
              console.log('Data is True');
              this.active = true;
            }else{
              console.log('Data is False');
              
            }

            if(routerEvent.url == '/admin/adminHome' || routerEvent.url == '/sellersList' || routerEvent.url == '/categoryForm' || routerEvent.url == '/productForm' || routerEvent.url == '/orderList' || routerEvent.url == '/viewOrder' || routerEvent.url == '/stockForm' || routerEvent.url == '/sellerHome' || routerEvent.url == '/adminHome'  ){
              console.log('Admin is True');
              this.active = true;
            }else{
              console.log('Admin is False');
              
            }


            // this.active=routerEvent.url;

            console.log("Assigned Values",this.active);
            
        }
    });
}}


