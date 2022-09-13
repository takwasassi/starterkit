import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endpoint } from'src/app/model/endpiont.model';
import { MyserviceService } from 'src/app/service/myservice.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateEndpointComponent } from '../update/update-endpoint.component';
import { DeleteComponent } from '../delete/delete.component';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css'],
    providers: [MyserviceService]
})
export class GetComponent implements OnInit {
  
  constructor(private service: MyserviceService, private routes: Router, private dg : MatDialog) { }
  endpoint= new Endpoint;
  id!:any
  getAllEndPoint(){
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
   this.getAllEndPoint();
  }
  displayedColumns: string[] = ['path', 'method', 'status_code','response_json', 'createdAt','updatedAt','update','delete'];
  deleteEndpoint(id?: number){
  /* this.service.deleteEndpointById(id).subscribe();
    //this.routes.navigate(['/starter/getendpoint'])
    window.location.reload();*/
    this.dg.open(DeleteComponent,{
      data : {
        id : id
        
      }
      
    }).afterClosed().subscribe(()=>{
      this.getAllEndPoint();
      
    })
  
  }
  updateEndpoint(data : any){
    this.dg.open(UpdateEndpointComponent,{
      data : {
        data : data
      }
    }).afterClosed().subscribe(()=>{
      this.getAllEndPoint();
    })
    this.service.getid(data.id);
    console.log("id = ", data.id);
  }

}
