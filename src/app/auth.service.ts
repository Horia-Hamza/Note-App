import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

 userData:any =new BehaviorSubject(null);

 getUserToken(){
  let unDecodedData =JSON.stringify(localStorage.getItem('userToken'));
  let decodedData = jwtDecode(unDecodedData)
  this.userData.next(decodedData)
  // console.log(this.userData._value);
  
 }
  constructor(private _HttpClient:HttpClient , private _Router:Router) { }

  getUserData(userData:object):Observable<any>{
  return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', userData)
  }

  getSigninUserData(userData:object):Observable<any>{
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin', userData)
    }

  logOut(){
      localStorage.removeItem('userToken');
      this.userData.next(null);
      this._Router.navigate(['/signin']);
      // console.log(this.userData._value);
      
    }
}
