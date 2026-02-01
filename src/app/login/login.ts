import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../login';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,CommonModule],
  standalone:true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  

    constructor(private formBuilder:FormBuilder,private loginService:LoginService){}
 
ngOnInit(): void {
  this.loginForm = this.formBuilder.group({

       email:['',[Validators.required,Validators.email]],
       password:['',Validators.required]

   });
}


submit(){

  if(this.loginForm.valid){

    this.loginService.login(this.loginForm.value).subscribe({
      next:(res:any)=>{
        console.log('login success',res);
      },
      error:(err:any)=> {
        console.error('login failed',err);
      },
    })
  }
}


}
