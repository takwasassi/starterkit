import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endpoint } from '../model/endpiont.model';
import { User } from '../model/user.model';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [MyserviceService]
})
export class UserComponent implements OnInit {
  constructor(private service: MyserviceService, private routes: Router) { }
  user= new User;
  ngOnInit(): void {
    this.service.listUser().subscribe(
      (response: any) => {
        this.user=response.rows
      
       
         //this.routes.navigate(['/starter/endpoint']);
          console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
