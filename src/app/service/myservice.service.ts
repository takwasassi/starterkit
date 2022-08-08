import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor(private user:HttpClient) { }
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  checkusernameandpassword(loginData:any) {
    return this.user.post("http://localhost:3000/users/login",loginData, {
    headers: this.requestHeader,
  });
  }
  }

