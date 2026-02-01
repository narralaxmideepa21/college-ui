import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FacultyServices } from '../faculty';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-facultydialog',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule,MatFormFieldModule,MatDialogModule,MatButtonModule,MatSelectModule,MatInputModule,MatDividerModule],
  templateUrl: './facultydialog.html',
  styleUrl: './facultydialog.css',
})
export class Facultydialog implements OnInit {

   form!:FormGroup;

   constructor(
    private fb:FormBuilder,
    private service:FacultyServices,
    private dialogRef:MatDialogRef<Facultydialog>,
    @Inject(MAT_DIALOG_DATA)public data:any){}

     

     ngOnInit():void{
       this.form = this.fb.group({
      facultyName:['',Validators.required],
      departmentId:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      status:['Active']

       });
      }
     

      save(){
        if(this.form.invalid)return;

        const payLoad = this.form.value;

        if(this.data?.id){
            this.service.updateFaculty(this.data.id,payLoad).subscribe({
              next:()=>this.dialogRef.close(true),
              error:(err:any)=>console.error('update failed',err)
            });
        }
        else{
          this.service.addFaculty(payLoad).subscribe({
            next:()=>this.dialogRef.close(true),
            error:(err:any)=>console.error('save failed',err)
            
          });
        }
      }
      cancel(){
        this.dialogRef.close();
      }

   }




