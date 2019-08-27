import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import {Global} from '../services/global';

export interface UserDetails {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  exp: number
  iat: number
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
}

@Injectable()
export class AuthenticationService {
  public url: string; 
  
  private token: string

  constructor(private http: HttpClient, private router: Router) {
    this.url= Global.url;
  }

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
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

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public register(body:any): Observable<any> {debugger
    return this.http.post(this.url +'users/register', body,{
        observe:'body'
      });
    //return this.http.post(`/users/register`, user)
  }


  
  login(body:any){
     
    return this.http.post(this.url +'users/login', body,{
      observe:'body'
    });
  }

  
  getUserName() {
    return this.http.get(this.url+ 'users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('token')
    this.router.navigateByUrl('/')
  }
}