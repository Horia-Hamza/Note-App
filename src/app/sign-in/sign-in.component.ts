import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
declare var $:any
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _router:Router) { }
  errorMessage:string='';
  signInForm:FormGroup=new FormGroup({
    "email":new FormControl(null,[Validators.required,Validators.email]),
    "password":new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
  })

  submitSignInForm(signInForm:FormGroup){
    if(signInForm.valid){
this._AuthService.getSigninUserData(signInForm.value).subscribe({
  next:(response)=>{
    if(response.message=='success'){
      localStorage.setItem('userToken',response.token)
      this._AuthService.getUserToken();
      this._router.navigate(['/profile'])
    }
    else{
this.errorMessage=response.message
    }
  }
})
    } 
  }
  ngOnInit(): void {
    $('#demo').particleground();
  }

}
