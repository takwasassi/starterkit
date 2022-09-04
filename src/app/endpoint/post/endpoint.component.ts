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


  postEndpointC() {
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




  postend = new FormGroup({
    path: new FormControl(''),
    method: new FormControl(''),
    status_code: new FormControl(''),
    response_json: new FormControl(''),
  });

  ngOnInit(): void {
  }

}
