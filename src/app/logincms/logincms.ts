import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Authservice } from '../authservice';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-logincms',
  standalone:true,
  imports: [CommonModule,MatFormFieldModule,MatButtonModule,MatInputModule,FormsModule,MatCardModule,MatIconModule],
  templateUrl: './logincms.html',
  styleUrl: './logincms.css',
})
export class Logincms {

username='';
password='';
error='';

constructor(private auth:Authservice,private router:Router){}

login(){
   const success = this.auth.login(this.username,this.password);

  if(success){
      console.log('Login saved, navigating...');
      console.log('localStorage:',localStorage.getItem('isLoggedIn'));

    this.router.navigate(['/dashboard']);
  }
  else{
      this.error='Invalid credentials';
  }
}

}
