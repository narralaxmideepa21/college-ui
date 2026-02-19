import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CoursesService } from '../courses';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { DepartmentService } from '../department';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-coursesdialog',
  imports: [CommonModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatDialogModule,MatSelectModule,MatButtonModule,MatDatepickerModule,MatDividerModule],
  standalone:true,
  templateUrl: './coursesdialog.html',
  styleUrl: './coursesdialog.css',
  providers:[provideNativeDateAdapter()]
})


export class CoursesDialog implements OnInit {
   courseForm!:FormGroup;

   constructor(
        private fb:FormBuilder,
        private services:CoursesService,
        private dialogRef:MatDialogRef<CoursesDialog>,
        @Inject(MAT_DIALOG_DATA) public data:any
   ){
     
    this.courseForm= this.fb.group({
     courseName:['',Validators.required],
     departmentId:[null,Validators.required],
     startDate:['',Validators.required],
     status:['Active',Validators.required]
    });

   }
 
       ngOnInit(): void {
         this.services.getDepartments().subscribe(res=>{
          console.log('departments api:',res);
         });
  
      }

    save(){
      if(this.courseForm.valid){
        console.log('sending to api:',this.courseForm.value);

        this.services.addCourse(this.courseForm.value).subscribe({
          next:(res:any)=>{
            console.log('course saved',res);
            this.dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error('save error',err);
          }
        }); 
      }
    }

    cancel(){
      this.dialogRef.close();
    }
}
