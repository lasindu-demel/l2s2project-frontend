import { Component, OnInit } from '@angular/core';
import { MapService} from '../services/map.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
data;

  years;

  constructor(private mapS: MapService) { }

  ngOnInit() {
    this.mapS.pastYear().subscribe(
        (res) => {
                this.data = res;
                console.log(this.data);
        }
        );
  }

  load(yea) {
    this.data = '';
    this.years = yea ;
    console.log(this.years);
    this.mapS.pastYears(this.years).subscribe(
      (res) => {
        this.data = res;
        console.log(this.data);
      }
    );
  }

}
