import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private latitude;
  private longitude;

  constructor(private http: HttpClient, private router: Router) { }

  public updateLocation(latitude, longitude){
    this.latitude = latitude;
    this.longitude = longitude;
  }

  public getLatitude() {
    return this.latitude;
  }

  public getLongitude() {
    return this.longitude;
  }

  public AddLand(land): Observable<any> {
    return this.http.post(`http://localhost:8080/api/land`, land)
  }

  public ViewLand(farmerId): Observable<any> {
    return this.http.get(`http://localhost:8080/api/land/ ${farmerId}`)
  }


  public DeleteLand(landId): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/land/ ${landId}`)
  }

  public AddHarvest(harvest): Observable<any> {
    return this.http.post(`http://localhost:8080/api/farmer/harvest`, harvest)
  }

  public ViewHarvest(landId): Observable<any> {
    return this.http.get(`http://localhost:8080/api/land/ ${landId}/harvest`);
  }

  public pastYears(y): Observable<any> {
    console.log(y);
    return this.http.get(`http://localhost:8080/api/summary/getSummaryForPastYears/${y}`);
  }
  public pastYear(): Observable<any> {
    return this.http.post('http://localhost:8080/api/summary/getPastYearSummary', {ddd:1});
  }

  public UpdateHarvest(harvest): Observable<any> {
    return this.http.put(`http://localhost:8080/api/farmer/harvest`, harvest);
  }



}
