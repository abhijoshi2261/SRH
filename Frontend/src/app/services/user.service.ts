import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login } from '../dataTypes';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  email = 'joshhiabhishek@gmail.com';

  isUserSignUp = new BehaviorSubject<boolean>(false);

  isUserLoggedIn = new EventEmitter<boolean>(false);

  constructor(private http:HttpClient, private route:Router) { }

  userSignUp(data:any){
    this.http.post('http://localhost:3000/users',data).subscribe((result:any)=>{
      if(result){
        this.isUserSignUp.next(true);
        this.route.navigate(['']);
        localStorage.setItem('customer',JSON.stringify(result));
      }else{
       alert('user not signUp'); 
      }
      
    })
  }

    userData:any='';

  userLogin(data:any){
    this.http.get(`http://localhost:3000/users?email=${data.loginEmail}&newPassword=${data.loginPassword}`,{observe:'response'}).subscribe((result:any)=>{
        if(result && result.body && result.body.length){
          console.log('Data Fetched');
          console.log(result);

          this.userData=result.body[0];
          console.log(this.userData);
          console.log(this.userData.role);
          console.log(this.userData.firstName + this.userData.lastName);
          
          if(this.userData.role==='customer'){
          this.route.navigate(['cartListing']);
          localStorage.setItem('customer',JSON.stringify(result.body));
          }else{
            this.route.navigate(['admin/adminHome']);
            localStorage.setItem('admin',JSON.stringify(result.body));
          }
          this.isUserSignUp.next(true);
        }
        else{
          console.log('Unable to Fetch Data');

          this.isUserLoggedIn.emit(true);
          
        }
        
    })
    // console.log(data.loginPassword);
    // console.log(data);
  }


}
