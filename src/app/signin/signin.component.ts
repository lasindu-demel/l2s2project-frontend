import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: UserService, private router: Router) { }

  credentials = {
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    nic:'',
    password: '',
    personalAddress:'',
    role:'Farmer',
    gramaNiladariDivision:''
  }

  ngOnInit() {
  }


  show(){
    if(this.credentials.role == 'Farmer')
      return true;
    return false;
  }


  register(){

      console.log(this.credentials)

      if(this.credentials.role == 'Farmer'){
      this.auth.FarmerRegister(this.credentials).subscribe(
        result=>{
          console.log(result)
          this.router.navigateByUrl('/login')
        }
      )
      }else{
        this.auth.BuyerRegister(this.credentials).subscribe(
          result=>{
            console.log(result)
            this.router.navigateByUrl('/login')
          }
        )
      }
  }

}
