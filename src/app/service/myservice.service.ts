import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from '../model/endpiont.model';

@Injectable()
export class MyserviceService {

  constructor(private user:HttpClient) { }
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  api: string= 'http://localhost:8090';

  checkusernameandpassword(userlogin?:FormData) {
    return this.user.post<Object>(this.api+"/api/auth/signin",userlogin
  );
  }
  register(userRegister?:FormData) {
    return this.user.post<Object>(this.api+"/api/auth/signup",userRegister
  );
  }

  postEndpoint(postend?:FormData) {
    return this.user.post<Object>(this.api+"/api/endpoints/",postend
  );
  }
  id?: Number;
  getid(getid?: Number){
    this.id = getid; 
  }
  updateEndpointById(putend?: Endpoint): Observable<Object>{
    return this.user.put<Object>(`${this.api}/api/endpoints/${this.id}`, putend);
  }
  
  getEndpoint() {
    return this.user.get<any>(this.api+"/api/endpoints");
  }
  getEndpointById(id?: number): Observable<object>{
    return this.user.get<Object>(`${this.api}/api/endpoints/${id}`);
  }
  
  deleteEndpointById(id?: number): Observable<Object>{
    return this.user.delete<Object>(`${this.api}/api/endpoints/${id}`);
  }
  listUser() {
    return this.user.get<any>(this.api+"/api/test/all"
  );
  }

  



  }

