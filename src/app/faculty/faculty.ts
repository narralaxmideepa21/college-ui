import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FacultyServices } from '../faculty';
import { Facultydialog } from '../facultydialog/facultydialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faculty',
  standalone:true,
  imports: [CommonModule,MatTableModule,MatButtonModule,MatIconModule,MatDialogModule],
  templateUrl: './faculty.html',
  styleUrl: './faculty.css',
})
export class Faculty implements OnInit{
   
displayedColumns =['id','facultyName','departmentId','email','phone','status','actions'];

dataSource = new MatTableDataSource<any>();

constructor(private service:FacultyServices,private dialog:MatDialog ){}

ngOnInit(): void {
  this.loadFaculty();
}


loadFaculty(){
  this.service.getFaculty().subscribe((res:any)=>{
    console.log('faculty',res);
    this.dataSource.data=res;
  });
}

openDialog(data?:any){
  const dialogRef= this.dialog.open(Facultydialog,{
    width:'1000px',
    data
  });

  dialogRef.afterClosed().subscribe((res:any)=>{
    if(res)this.loadFaculty();
  });
}

delete(id:number){
  this.service.delete(id).subscribe(()=>{
    this.loadFaculty();
  });
}









}
