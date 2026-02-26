import { Component } from '@angular/core';
import { Authservice } from '../authservice';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { O } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule,MatButtonModule,MatToolbarModule,MatCardModule,MatIconModule,RouterModule,MatInputModule,MatFormFieldModule,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  searchText:string='';

  constructor(public auth:Authservice){}

   cards =  [{name:'Students',icon:'school',route:'/students'},
             {name:'Departments',icon:'account_tree',route:'/departments'},
             {name:'Courses',icon:'menu_book',route:'/courses'},
             {name:'Faculty',icon:'groups',route:'/faculty'},
            ];

 filteredCards(){
       return this.cards.filter(card=>{
         return  card.name.toLowerCase().includes(this.searchText.toLowerCase());
       });
  }

  logout(){
    this.auth.logout();
  }
}
