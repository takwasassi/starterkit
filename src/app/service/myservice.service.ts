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
  id?: number;
  getid(getid?: number){
    this.id = getid; 
  }
  updateEndpointById(putend?: any,id?: number): Observable<any>{
    return this.user.put<any>(`${this.api}/api/endpoints/${id}`, putend);
   
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

  token = localStorage.getItem('jwtToken') || '{}';

  getUserDetails(): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.append('x-access-token', this.token)
    
    return this.user.get<any>(`${this.api}/api/test/user`,
        {
            headers: headers,
        }
    );
}




  }

