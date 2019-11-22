import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service'

@Component({
  selector: 'app-view-land',
  templateUrl: './view-land.component.html',
  styleUrls: ['./view-land.component.css']
})
export class ViewLandComponent implements OnInit {
  marked: boolean = true;
  landId: any;

  constructor(private map:MapService) { }

    farmerId

    land

   arr = [1,2,3,4,5,6]

  ngOnInit() {

    this.farmerId = localStorage.getItem('userID')

    this.map.ViewLand(this.farmerId).subscribe(
      result=>{
        this.land = result
      }
    )
  }

  ViewHarvest(id){
    this.landId = id
    this.marked = false
  }

  AddHarvest(id){
    this.landId = id
  }

  DeleteLand(id){

    this.map.DeleteLand(id).subscribe(
      result=>{
        window.location.reload()
      }
    )

  }

}
