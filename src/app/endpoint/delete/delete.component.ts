import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyserviceService } from 'src/app/service/myservice.service';




@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
  providers: [MyserviceService]
})
export class DeleteComponent implements OnInit {

  constructor(private service: MyserviceService , @Inject(MAT_DIALOG_DATA) private data : any, private thisDg : MatDialogRef<DeleteComponent>) { }

  id! : number

  ngOnInit(): void {
    this.id = this.data['id']
  }
  ;
  confirmDelete(){
    this.service.deleteEndpointById(this.id).subscribe();
    this.thisDg.close();
    console.log(this.id)
  }

}
