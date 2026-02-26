import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { StudentServices } from '../student';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { StudentdialogComponent } from '../studentdialog/studentdialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-student',
  imports: [MatDialogModule,MatButtonModule,MatTableModule,CommonModule,MatIconModule,MatCardModule,MatPaginatorModule,MatSortModule],
  standalone:true,
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent implements AfterViewInit {

  displayedColumns:string[]=['id','name','email','department','actions'];
  dataSource = new MatTableDataSource<any>();

constructor(private service:StudentServices, private dialog:MatDialog){}


@ViewChild(MatPaginator) paginator!:MatPaginator;
@ViewChild(MatSort) sort!:MatSort;

ngAfterViewInit(): void {
  this.dataSource.paginator=this.paginator;
  this.dataSource.sort=this.sort;
}

ngOnInit(): void {
  this.load();
}

  load(){
   this.service.getAll().subscribe((res:any)=>{
    console.log('table data:',res);
     this.dataSource.data=res;
   });
   
  }


openDialog(student?:any){
   const dialogRef= this.dialog.open(StudentdialogComponent,{
      width:'900px',
      data:student,
   });

  dialogRef.afterClosed().subscribe((result:any)=>{
     if(result){
        this.load();
     }
  });
}






















}
