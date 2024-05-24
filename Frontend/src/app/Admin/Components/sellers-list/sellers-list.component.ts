import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sellers-list',
  templateUrl: './sellers-list.component.html',
  styleUrls: ['./sellers-list.component.css']
})
export class SellersListComponent {

  constructor(private user:UserService){

  }

  ngOnInit() {
    this.getSellers();
  }

  sellerList:any;

  getSellers(){
      this.user.getSellersList().subscribe((result:any)=>{
          this.sellerList = result;
          console.log(result[0]);
          
      })
  }

  change:boolean=true;
  newStatus:any='';
  status(data:any,name:any){
      console.log('Id',data);
      console.log('Name',name);
      this.change = !this.change
      if(this.change==true){
        this.newStatus = 'Active'
      }else{
        this.newStatus ='Inactive'
      }
      
      this.user.updateSeller(data,this.newStatus);
  }

}
