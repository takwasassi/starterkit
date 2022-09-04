import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  constructor(private service: MyserviceService,@Inject(MAT_DIALOG_DATA) private data: any,private thisDg : MatDialogRef<UpdateEndpointComponent>) { }

  id!: number
  form!: FormGroup
  ngOnInit(): void {

      this.id = this.data['data']['id']
      this.form = new FormGroup({
        path: new FormControl(this.data['data']['path']),
        method: new FormControl(this.data['data']['method']),
        status_code: new FormControl(this.data['data']['status_code']),
        response_json: new FormControl(this.data['data']['response_json']),
});
      
    
  }


  submit(){
   
    this.service.getid(this.id);
    console.log("id = ", this.id);
       this.service.updateEndpointById(this.form.value,this.id).subscribe(()=>{
       
      this.thisDg.close();
    })
  }

 

}
