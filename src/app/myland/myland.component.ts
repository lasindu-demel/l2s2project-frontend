import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { MapService} from '../services/map.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myland',
  templateUrl: './myland.component.html',
  styleUrls: ['./myland.component.css']
})
export class MylandComponent implements OnInit {

  title:string = "GoogleMaps";
  latitude: number;
  longitude: number;
  zoom:number;
  address: string;
  private geoCoder;

  credential={
    latitude:0,
    longitude:0,
    size:'',
    farmerId:''
  }


  @ViewChild('search', {static: false})
  public searchElementRef: ElementRef;
  marked1: boolean = true;
  marked2: boolean = false;
  marked3: boolean = false;
  marked4 = false;
  constructor(
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private mapService: MapService) { }

  ngOnInit() {

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete =  new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log(place.formatted_address); //this is the search addres as formatted
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          console.log("Zoom longitude from map component"+this.longitude);
          console.log("Zoom latitude from map component"+this.latitude);

          // Update location data in map service
          this.mapService.updateLocation(this.latitude, this.longitude);

        });
      });
    });

  }


  private setCurrentLocation() {
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);

        // Update location data in map service
        this.mapService.updateLocation(this.latitude, this.longitude);

      });
    }
  }



  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);

    // Update location data in map service
    this.mapService.updateLocation(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

  });
  }



  AddLand(){

    this.credential.latitude = this.latitude
    this.credential.longitude = this.longitude
    this.credential.farmerId = localStorage.getItem('userID')

    console.log(this.credential)

    this.mapService.AddLand(this.credential).subscribe(
      result => {
       window.alert("You have add the land successfully")
        window.location.reload()
      }
    );
  }


  Land() {

    this.marked1 = true;
    this.marked2 = false;
    this.marked3 = false;
    this.marked4 = false;
  }

  Harvest() {
    this.marked1 = false;
    this.marked2 = true;
    this.marked3 = false;
    this.marked4 = false;
  }


  Bid() {

    this.marked1 = false;
    this.marked2 = false;
    this.marked3 = true;
    this.marked4 = false;
  }
  prediction() {
    console.log('prediction');
    this.marked1 = false;
    this.marked2 = false;
    this.marked3 = false;
    this.marked4 = true;
  }

  LogOut(){

    localStorage.removeItem('userID')

    this.router.navigateByUrl('/home')
  }


}
