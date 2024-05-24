import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { emailValidator } from "src/app/services/email-regex";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

    constructor(private user:UserService, private route:Router){}

    NewPassword:boolean=false;

    showNewPassword(){
      this.NewPassword = !this.NewPassword
    }

    ConfirmPassword:boolean=false;


    showConfirmPassword(){
      this.ConfirmPassword = !this.ConfirmPassword
    }

    LoginPssword:boolean=false;

    showLoginPassword(){
      this.LoginPssword = !this.LoginPssword
    }

    login:boolean=true;

    formChange(){
      this.login = !this.login;
    }

    seller:boolean=false;

    sellerForm(){
      this.seller = !this.seller;
    }

    signUpForm = new FormGroup({
      firstName : new FormControl('',[Validators.required]),
      lastName : new FormControl('',[Validators.required]),
      email : new FormControl('',Validators.compose([emailValidator,Validators.required])),
      mobileNo : new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      newPassword : new FormControl('',[Validators.required]),
      confirmPassword : new FormControl('',[Validators.required]),
      role: new FormControl('')
    })

    loginForm = new FormGroup({
      loginEmail : new FormControl('',[Validators.required]),
      loginPassword : new FormControl('',[Validators.required]),
    })

    sellerRegistrationForm = new FormGroup({
      businessName : new FormControl('',[Validators.required]),
      ownerFirstName :new FormControl('',[Validators.required]),
      ownerLastName : new FormControl('',[Validators.required]),
      businessMobile : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      businessEmail : new FormControl('',Validators.compose([emailValidator,Validators.required])),
      businessAdd1 : new FormControl('',[Validators.required]),
      businessAdd2 : new FormControl('',[Validators.required]),
      businessAdd3 : new FormControl('',[Validators.required]),
      businessAddCity : new FormControl('',[Validators.required]),
      businessAddPincode : new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(6)]),
      newPassword : new FormControl('',[Validators.required]),
      confirmPassword : new FormControl('',[Validators.required]),
      role: new FormControl(''),
      status :new FormControl('')
    })

    get signUpControls(){
      return this.signUpForm.controls;
    }

    get loginControls(){
      return this.loginForm.controls;
    }

    get SellerControls(){
      return this.sellerRegistrationForm.controls;
    }

    
    userSignUp(data:any){
      data.role='customer';
      if(this.signUpForm.valid){
        this.user.userSignUp(data);
        // .subscribe((result)=>{
        //   console.log(result);
        // })
      }else{
        this.signUpForm.markAllAsTouched();
        console.log('form is not submitted');
      }

      console.log(data.role);
      
      
    }

    register(data:any){

      data.role='seller';
      data.status='Active';
      if(this.sellerRegistrationForm.valid){
        this.user.addSellers(data);
        // .subscribe((result)=>{
        //   console.log(result);
        // })
      }else{
        this.sellerRegistrationForm.markAllAsTouched();
        console.log('form is not submitted');
      }

      console.log(data.role);

    }

    credentialsError='';
    userLogin(data:any){
      if(this.loginForm.valid){
        console.log(data);
        this.user.userLogin(data)
       this.user.isUserLoggedIn.subscribe((isError)=>{
        if(isError){
          this.credentialsError='Please Enter Valid Credentials';
        }
        });
      }
      else{
        this.loginForm.markAllAsTouched();
      }
  }

  
    sellerLogin(data:any){
      if(this.loginForm.valid){
        console.log('Seller',data);
        this.user.sellersLogin(data)
       this.user.isUserLoggedIn.subscribe((isError)=>{
        if(isError){
          this.credentialsError='Please Enter Valid Credentials';
        }
        });
      }
      else{
        this.loginForm.markAllAsTouched();
      }
  }

}
