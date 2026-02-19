import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DepartmentService } from '../department';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Departmentdialog } from '../departmentdialog/departmentdialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-department',
  imports: [CommonModule,MatButtonModule,MatIconModule,MatTableModule,MatDialogModule,MatDividerModule],
  standalone:true,
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department implements OnInit{


     displayedColumns:string[]=['id','name','hod','status','actions'];
     dataSource = new MatTableDataSource<any>();


       constructor(private service:DepartmentService,private dialog:MatDialog){}

   ngOnInit(): void {
     this.loadDepartments();
   }

    loadDepartments(){
      this.service.getAll().subscribe( (result:any)=>{
        console.log('departments:',result);
        this.dataSource.data=result;
      });
    }



       openDialog(data?:any){
          const dialogRef= this.dialog.open(Departmentdialog,{
            width:'700px',
            data
          });

          dialogRef.afterClosed().subscribe((res:any)=>{
            if(res){
              this.loadDepartments();
            }
          })

       }


    delete(id:number){
      
      this.service.delete(id).subscribe(()=>{
        this.dataSource.data = this.dataSource.data.filter(d => d.id!==id);
      });
    }
}
