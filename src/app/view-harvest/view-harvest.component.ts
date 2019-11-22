import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service'
import { ViewLandComponent } from '../view-land/view-land.component'

@Component({
  selector: 'app-view-harvest',
  templateUrl: './view-harvest.component.html',
  styleUrls: ['./view-harvest.component.css']
})
export class ViewHarvestComponent implements OnInit {
  harvest: any;

  arr = [1,2,3,4,5,6]

  constructor(private map: MapService, private view: ViewLandComponent) { }

  ngOnInit() {

    this.map.ViewHarvest(this.view.landId).subscribe(
      result=>{
        this.harvest = result
        console.log(this.harvest)
      }
    )
  }

  UpdateHarvest(harvest){

    harvest.status = 1
    this.map.UpdateHarvest(harvest).subscribe(
      result=>{
        this.ngOnInit()
      }
    )
  }


  ResetUpdate(harvest){

    harvest.status = 0
    this.map.UpdateHarvest(harvest).subscribe(
      result=>{
        this.ngOnInit()
      }
    )
  }


  Back(){
    this.view.marked = true
  }

}
