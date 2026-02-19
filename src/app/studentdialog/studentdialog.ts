import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StudentServices } from '../student';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-studentdialog',
  imports: [CommonModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatDialogModule,MatButtonModule,MatCardModule,MatDividerModule],
  standalone:true,
  templateUrl: './studentdialog.html',
  styleUrl: './studentdialog.css',
})
export class StudentdialogComponent {

 form!:FormGroup;
 isEdit = false;  //controls the title nd save logic

constructor(
  private fb:FormBuilder,
  private service:StudentServices,
  private dialogRef:MatDialogRef<StudentdialogComponent>,
  @Inject(MAT_DIALOG_DATA)public data:any){

      this.form= this.fb.group({
         id:[],
         name:[''],
         email:[''],
         department:['']
       });

        if(data){
           this.isEdit=true;
           this.form.patchValue(data);
        }
  }

save(){
    if(this.isEdit){
     
       this.service.update(this.form.value.id,this.form.value).subscribe(()=>{
          this.dialogRef.close(true);
        });
    }
    else{
    
        this.service.add(this.form.value).subscribe(()=>{
          this.dialogRef.close(true);
        });
    }
}
     close(){
        this.dialogRef.close();
     }
}
