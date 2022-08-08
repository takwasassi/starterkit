
import {  Router } from '@angular/router';


import {
  
  NgForm
} from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  msg = '';
  constructor(private service: MyserviceService, private routes: Router) { }

  login(loginForm: NgForm) {
   this.service.checkusernameandpassword(loginForm.value).subscribe(
      (response: any) => {
        
        localStorage.setItem('jwtToken', response.token);
       
          this.routes.navigate(['/starter']);
       
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}
