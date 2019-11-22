import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BidService} from '../services/bid.service';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit {
  marked: boolean = true;
  harvest: any;

  constructor(private bid: BidService, private  router: Router) {
  }

  ngOnInit() {
    this.bid.GetHarvest(localStorage.getItem('userID')).subscribe(
      result => {
        this.harvest = result;
        console.log(this.harvest);
      }
    );
  }

  ViewHarvest() {
    this.marked = true;
  }

  YourBid() {
    this.marked = false;
  }

  LogOut(){

    localStorage.removeItem('userID')

    this.router.navigateByUrl('/home')
  }

  SubmitBid(harvID){

  }

}
