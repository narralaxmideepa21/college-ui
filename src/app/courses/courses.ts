import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CoursesService } from '../courses';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CoursesDialog } from '../coursesdialog/coursesdialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-courses',
  imports: [CommonModule,MatButtonModule,MatTableModule,MatIconModule,MatDialogModule],
  standalone:true,
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit{
   displayedColumns:string[]=['id','courseName','departmentId','startDate','status'];

   dataSource! :MatTableDataSource<any>;
   

   constructor(private services:CoursesService,private dialog:MatDialog){}


   ngOnInit(): void {
     this.loadCourses();
   }

   loadCourses(){
         this.services.getCourses().subscribe({
         next:(res:any[])=> {
              console.log('courses loaded:',res);
               this.dataSource = new MatTableDataSource(res);
         },
         error:(err:any)=>console.error(err)
        });
    }

   openDialog(data?:any){
    const dialogRef = this.dialog.open(CoursesDialog,{
      width:'900px',
      data
    });

    dialogRef.afterClosed().subscribe((ok)=>{
      if(ok){
         this.loadCourses();
      }
    });

   }



  // delete(id:number){
  //    this.services.delete(id).subscribe(()=>{
  //       this.loadCourses();
  //    });
  // }


}
