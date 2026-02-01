import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../login';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatButtonModule,CommonModule,RouterModule],
  templateUrl: './signup.html',
  standalone:true,
  styleUrls: ['./signup.css'],
})
export class SignupComponent implements OnInit{

  signupForm!:FormGroup;

  constructor(private fb:FormBuilder,private loginService:LoginService){}

  ngOnInit(): void {
    this.signupForm=this.fb.group({

      fullName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]

    });
  }

submit(){
  if(this.signupForm.valid){

      //optional checks if password matches to confirm password or not//
    if(this.signupForm.value.password!==this.signupForm.value.confirmPassword){
      alert('passwords doesnot match');
      return;
    }
//create user object
    const user = {
    fullName: this.signupForm.value.fullName,
    email: this.signupForm.value.email,
    password: this.signupForm.value.password
  };

       this.loginService.register(user).subscribe({

           next:(res:any)=>{
            console.log('signup successful',res);
            alert('signup successful!');
            this.signupForm.reset();
           },
            error:(err:any)=>{
            console.error('signup failed',err);
            alert('signup failed');
           },
    

        });
  }
  else{
    this.signupForm.markAllAsTouched();
  }

}

}
