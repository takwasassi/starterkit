import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor(private user:HttpClient) { }
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  api: string= 'http://localhost:8090';

  checkusernameandpassword(userlogin?:FormData) {
    return this.user.post<Object>(this.api+"/api/auth/signin",userlogin
  );
  }

  postEndpoint(postend?:FormData) {
    return this.user.post<Object>(this.api+"/api/endpoints/",postend
  );
  }

  
  getEndpoint() {
    return this.user.get<any>(this.api+"/api/endpoints"
  );
  }
  listUser() {
    return this.user.get<any>(this.api+"/api/test/all"
  );
  }

  



  }

