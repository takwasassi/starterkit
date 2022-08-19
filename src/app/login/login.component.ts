
import {  Router } from '@angular/router';


import {
  
  FormControl,
  FormGroup,
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

  login() {
   this.service.checkusernameandpassword(this.loginForm.value).subscribe(
      (response: any) => {
        
       // localStorage.setItem('jwtToken', response.token);
       
          this.routes.navigate(['/starter']);
          console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {}
}
