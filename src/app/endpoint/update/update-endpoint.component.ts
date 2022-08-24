import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { Endpoint } from 'src/app/model/endpiont.model';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-update-endpoint',
  templateUrl: './update-endpoint.component.html',
  styleUrls: ['./update-endpoint.component.scss'],
  providers: [MyserviceService]
})
export class UpdateEndpointComponent implements OnInit {
  endpoint:Endpoint= new Endpoint;
  constructor(private service: MyserviceService, private routes: Router) { }

  ngOnInit(): void {
    this.service.getEndpointById().subscribe(data=>{
      this.endpoint = data;
      console.log(this.endpoint)
});
      
    
  }
  updateEndPoint(id?: number ){
    console.log(this.endpoint);
    this.service.updateEndpointById(this.endpoint).subscribe();
    this.routes.navigate(['/starter/getendpoint']);
  }
 
  putend = new FormGroup({
    path: new FormControl(''),
    method: new FormControl(''),
    status_code: new FormControl(''),
  });

}
