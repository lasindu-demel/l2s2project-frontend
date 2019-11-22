import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth:UserService) { }

  credentials={
    email:'',
    password:'',
    role:'Farmer'
  }

  ngOnInit() {
  }

  login(){
    console.log(this.credentials)

    if(this.credentials.role == "Farmer"){
      this.auth.FarmerLogin(this.credentials).subscribe(
        result=>{
          console.log(result)
          localStorage.setItem('userID', result.farmer.farmerId)
          this.router.navigateByUrl('/myland')
        }
      )
    }else if(this.credentials.role == "Buyer"){
      this.auth.BuyerLogin(this.credentials).subscribe(
        result=>{
          localStorage.setItem('userID', result.buyer.buyerId)
          console.log(result)
          this.router.navigateByUrl('/buyerProfile')
        }
      )
    }else{
      this.auth.AdminLogin(this.credentials).subscribe(
        result=>{
          console.log(result)
        }
      )
    }
  }

}
