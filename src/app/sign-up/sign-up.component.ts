import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
Router

declare var $:any

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  errorMessage:string='';
  
registerForm:FormGroup=new FormGroup({
  "first_name":new FormControl(null,[Validators.required,Validators.maxLength(8),Validators.minLength(2)]),
  "last_name":new FormControl(null,[Validators.required,Validators.maxLength(8),Validators.minLength(2)]),
  "email":new FormControl(null,[Validators.required,Validators.email]),
  "password":new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
  "age":new FormControl(null,[Validators.required,Validators.max(70),Validators.min(15)]),
})
  constructor(private _AuthService:AuthService ,private _Router:Router) { }

  submitForm(registerForm:FormGroup){

    if(this.registerForm.valid){
     this._AuthService.getUserData(registerForm.value).subscribe({
      next:(response)=>{
        if(response.message=='success'){
           this._Router.navigate(['/signin'])
        }
        else
        {
           this.errorMessage=response.errors.email.message
 
        }

      }
     })
    }
    
  }
  ngOnInit(): void {

    $('#demo').particleground();
  }

}
