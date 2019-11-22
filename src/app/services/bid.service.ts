import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable()
export class BidService {

  constructor(private http: HttpClient, private router: Router) { }

  public GetHarvest(buyerId): Observable<any> {
    return this.http.get(`http://localhost:8080/api/buyer/${buyerId}/harvest`)
  }

  public AddBid(bid): Observable<any> {
    return this.http.post(`http://localhost:8080/api/buyer/bid`, bid)
  }

  public DeleteBid(bidId): Observable<any> {
    return this.http.get(`http://localhost:8080/api/buyer/bid/ ${bidId}`)
  }

  public GetBid(buyerId): Observable<any> {
    return this.http.get(`http://localhost:8080/api/buyer/ ${buyerId}/bids`)
  }


}
