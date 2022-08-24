
import {  Router } from '@angular/router';


import {
  
  FormControl,
  FormGroup,
  NgForm
} from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MyserviceService]
})
export class RegisterComponent implements OnInit {
  msg = '';
  constructor(private service: MyserviceService, private routes: Router) { }

  register() {
   this.service.register(this.registerForm.value).subscribe(
      (response: any) => {
        
       // localStorage.setItem('jwtToken', response.token);
       
          this.routes.navigate(['/login']);
          console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {}
}
