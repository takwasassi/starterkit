import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endpoint } from'src/app/model/endpiont.model';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss'],
    providers: [MyserviceService]
})
export class GetComponent implements OnInit {

  constructor(private service: MyserviceService, private routes: Router) { }
  endpoint= new Endpoint;
  ngOnInit(): void {
    this.service.getEndpoint().subscribe(
      (response: any) => {
        this.endpoint=response.rows
      
       
         //this.routes.navigate(['/starter/endpoint']);
          console.log(this.endpoint);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
