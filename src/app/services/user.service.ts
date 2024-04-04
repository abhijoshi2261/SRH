import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login } from '../dataTypes';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserSignUp = new BehaviorSubject<boolean>(false);

  isUserLoggedIn = new EventEmitter<boolean>(false);

  constructor(private http:HttpClient, private route:Router) { }

  userSignUp(data:any){
    return this.http.post('http://localhost:3000/users',data);
  }

  userLogin(data:login){
    this.http.get(`http://localhost:3000/users?email=${data.loginEmail}&newPassword=${data.loginPassword}`,{observe:'response'}).subscribe((result:any)=>{
        if(result && result.body && result.body.length){
          console.log('Data Fetched');
          this.route.navigate(['buyerHome']);
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
