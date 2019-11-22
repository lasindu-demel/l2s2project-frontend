import { Component, OnInit } from '@angular/core';
import { ViewLandComponent } from '../view-land/view-land.component'
import { MapService } from '../services/map.service'

@Component({
  selector: 'app-after-my-land',
  templateUrl: './after-my-land.component.html',
  styleUrls: ['./after-my-land.component.css']
})
export class AfterMyLandComponent implements OnInit {

  constructor(private view : ViewLandComponent, private map: MapService) { }

  credentials={
    type:'',
    quantity:'',
    unitPrice:'',
    farmerId:'',
    landId:0
  }

  ngOnInit() {
  }

  AddHarvest(){

    this.credentials.farmerId = localStorage.getItem('userID')
    this.credentials.landId = this.view.landId

    console.log(this.credentials)

    this.map.AddHarvest(this.credentials).subscribe(
      result=>{
        window.alert("You have successfully added the harvest")
        window.location.reload
      }
    )

  }

}
