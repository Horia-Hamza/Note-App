import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

isLogin:boolean=false;

  constructor(private _AuthService:AuthService) { }

subscribeData(){
  this._AuthService.userData.subscribe({
    next:()=>{
      if(this._AuthService.userData.getValue() !=null){
        this.isLogin=true;
      }
      else{
        this.isLogin=false;
      }
    }
  })
  
}


signOut(){
  this._AuthService.logOut();
}
  ngOnInit(): void {
  this.subscribeData()
  }

}
