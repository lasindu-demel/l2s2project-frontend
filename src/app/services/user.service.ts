import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface UserDetails {
  id: number
  first_name: string
  last_name: string
  user_type: string
  email: string
  nic: string
  contact: string
  address: string
  password: string
}

interface TokenResponse {
  token: string
}

@Injectable()

export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  private token: string

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public FarmerRegister(user): Observable<any> {
    return this.http.post(`http://localhost:8080/api/farmer`, user)
  }

  public BuyerRegister(user): Observable<any> {
    return this.http.post(`http://localhost:8080/api/buyer`, user)
  }

  public FarmerLogin(user): Observable<any> {
    return this.http.post(`http://localhost:8080/api/farmer/login`, user)
  }

  public BuyerLogin(user): Observable<any> {
    return this.http.post(`http://localhost:8080/api/buyer/login`, user)
  }

  public AdminLogin(user): Observable<any> {
    return this.http.post(`http://localhost:8080/api/admin/login`, user)
  }

}
