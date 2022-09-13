import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MyserviceService]
})
export class ProfileComponent implements OnInit {

  constructor(private service: MyserviceService, private routes: Router) { }
  users= new User;
  ngOnInit(): void {
    this.service.getUserDetails().subscribe(
      (response: any) => {
        this.users=response
      
       
         //this.routes.navigate(['/starter/endpoint']);
          console.log(this.users);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
