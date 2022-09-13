import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';


@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss'],
  providers: [MyserviceService]
})
export class EndpointComponent implements OnInit {

  constructor(private service: MyserviceService, private routes: Router) { }

  id!:any
  postEndpointC() {
    this.userId.setValue(this.id);
    this.service.postEndpoint(this.postend.value).subscribe(
       (response: any) => {
         
       
        
          this.routes.navigate(['/starter/getendpoint']);
           console.log(response);
       },
       (error) => {
         console.log(error);
       }
     );
   }


   userId=  new FormControl('')

  postend = new FormGroup({
    path: new FormControl(''),
    method: new FormControl(''),
    status_code: new FormControl(''),
    response_json: new FormControl(''),
    userId:this.userId
    
  });
 
  

  ngOnInit(): void {
    this.service.getUserDetails().subscribe(
      (response: any) => {
        this.id=response.id
          console.log(this.id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
