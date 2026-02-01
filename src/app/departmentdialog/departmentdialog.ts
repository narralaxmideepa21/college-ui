import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DepartmentService } from '../department';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Department } from '../department/department';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Data } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-departmentdialog',
  imports: [CommonModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatSelectModule,MatDialogModule,MatButtonModule,MatDividerModule],
  standalone:true,
  templateUrl: './departmentdialog.html',
  styleUrl: './departmentdialog.css',
})
export class Departmentdialog  {

form!:FormGroup;

constructor(
  private fb:FormBuilder,
  private service:DepartmentService,
  private dialogRef:MatDialogRef<Departmentdialog>,
  @Inject(MAT_DIALOG_DATA) public data:any
){

  this.form=this.fb.group({
     name:['',Validators.required],
     hod:['',Validators.required],
     status:['Active',Validators.required]
  });


  if(this.data){
    this.form.patchValue(this.data);
  }

}


  



submit(){

  
   if(this.data){
    this.service.update(this.data.id,this.form.value)
    .subscribe(
      ()=>this.dialogRef.close(true),
      (err:any) => console.error('API error', err)
    );
   }
   else{
    this.service.save(this.form.value)
    .subscribe(
      ()=>this.dialogRef.close(true),
       (err:any) => console.error('API error', err)
    
     );
   }

    
}




}
