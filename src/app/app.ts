import { AfterViewInit, Component, inject, OnInit, signal, viewChild, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { OrganizationService } from './services/item';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {  FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {  MatTimepickerModule } from '@angular/material/timepicker';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatDialogTitle,MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogConfig, DialogModule } from '@angular/cdk/dialog';

 import { MatMenuModule } from '@angular/material/menu';
 import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
 import { MatProgressSpinner, ProgressSpinnerMode } from '@angular/material/progress-spinner';
 import { ProgressBarMode } from '@angular/material/progress-bar';
 import { MatCardContent, MatCardModule } from '@angular/material/card';
 import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
 import { MatSliderHarness } from '@angular/material/slider/testing';
 import { MatSliderModule } from '@angular/material/slider';
 import { validateHorizontalPosition } from '@angular/cdk/overlay';
 import { MatStepperModule } from '@angular/material/stepper';
 import { MatInputModule } from '@angular/material/input';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { findAttributeOnElementWithAttrs } from '@angular/cdk/schematics';
 import { MatNestedTreeNode, MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
 import { MatIconModule } from '@angular/material/icon';
 import { CdkTreeModule, NestedTreeControl } from '@angular/cdk/tree';
 import { DataSource } from '@angular/cdk/collections';
 import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
 import { MatTableDataSource, MatTableModule } from '@angular/material/table';
 import { LiveAnnouncer } from '@angular/cdk/a11y';
 import { servicesVersion } from 'typescript';
 import { errorContext } from 'rxjs/internal/util/errorContext';
 import { SelectionModel } from '@angular/cdk/collections';

 import { PeriodicService } from './services/periodic.service';
 import { MatCheckboxModule } from '@angular/material/checkbox';
 import { firstValueFrom } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideNativeDateAdapter } from '@angular/material/core';

// import { EmployeeDialogComponent } from './employee-dialog/employee-dialog-component';



//  export interface PeriodicElement{

//    name:string;
//       position:number;
//     weight:number;
//     symbol:string;
//   }
   
 export interface MyRow {
   id: number;
   name: string;
   age: number;
  //  city: string;
  // cost:number;
 }



  // name:String;
  // children?:Food[];

@Component({
  selector:'app-root',
  standalone:true,
  imports:[RouterOutlet],
  templateUrl:'./app.html',
  styleUrl:'./app.css',
  providers:[provideNativeDateAdapter()],
})

export class App  {

//   private dialog = inject(MatDialog);

//  openLogin(){
//     this.dialog.open(,{
//         width :'400px'
//     });
// }

// loadTable(){
//   this.periodicService.getUsers().subscribe({
//     next:(res:any)=> {
//       this.dataSource.data=res;
//     },
//     error:(err)=> {
//       console.error(err);
//     },
//   });
// }

}






// displayedColumns: string[] = ['select', 'id', 'name', 'age', 'city','cost'];

//   dataSource = new MatTableDataSource<MyRow>([
//     { id: 1, name: 'Alice', age: 25, city: 'London',cost:100 },
//     { id: 2, name: 'Bob', age: 30, city: 'New York',cost :140 },
//     { id: 3, name: 'Charlie', age: 28, city: 'Paris' ,cost:200}

//   ]);
 
  
//   selection = new SelectionModel<MyRow>(true); // true = multi-select

//   private periodicService=inject(PeriodicService);

//   totalCost =0;

//   @ViewChild(MatSort) sort!: MatSort;


  
// //api cls//
//   ngOnInit(): void {

//     this.loadUserData();
//     this.calculateTotalCost();
//   }

// //this is usingfor childref variable//
//    ngAfterViewInit() {
//     this.dataSource.sort = this.sort;
//    }

// calculateTotalCost():void{
//   let total=0;
//   this.dataSource.data.forEach((item)=>{
//        //total = total + item.cost;
//        total+=item.cost;
//   });
//   this.totalCost= total;
// }


// //api call getdata//
//  loadUserData(){
//   this.periodicService.getPeriodicData().subscribe({
//     next:(res)=>{
//       this.dataSource.data=res;
//       this.calculateTotalCost();
//     },
//     /*error:(err)=>{
//      console.error('api error:',err);
//   }*/
   
//    });
// }
// //  const res= await firstValueFrom(this.periodicService.getPeriodicData());
// //  this.dataSource.data=res;

// //addData api call//
//  addUserData(){
//   const newRow:MyRow={
//     id:0,
//     name:'test',
//     age:22,
//     city:'hyd',
//     cost:130
//   }

//    this.periodicService.addPeriodicData(newRow).subscribe(()=>{
//        this.loadUserData();
//    });
// }

//  /*---ASYNC AWAIT---*/
//   // await firstValueFrom(this.periodicService.addPeriodicData(newRow));
//   // this.loadUserData();

// updateUserData(id:number){
//   const myRow:MyRow={
//     id:id,
//     name:'update user',
//     age:20,
//     city:'delhi',
//     cost:34000
//   };
//    this.periodicService.updatePeriodicData(id).subscribe(()=>{
//           this.loadUserData();
//    });
// }

// deleteUserData(id:number){
//   this.periodicService.deletePeriodicData(id).subscribe(()=>{
//         this.loadUserData();
//   });

// }



//   /** Check if all rows are selected */
//   isAllSelected() {
//     const Selected = this.selection.selected.length;
//     const Rows = this.dataSource.data.length;
//     return Selected === Rows;
//   }


  
//   /** Toggle all rows */
//   toggleAllRows() {
//     if (this.isAllSelected()) {
//       this.selection.clear();
//     } else {
//       this.selection.select(...this.dataSource.data);
//     }
//   }












//     Periodicing:PeriodicElement[]=[
//       {position:1,name:'hydrogen',weight:1.0079,symbol:'H'},
//       {position:2,name:'helium',weight:4.0026	,symbol:'He'},
//       {position:3,name:'lithium',weight:6.941	,symbol:'Li'},
//       {position:4,name:'berilium',weight:9.0122	,symbol:'Be'}, 
     
//       {position:5,name:'boron',weight:10.811,symbol:'B'},
//       {position:6,name:'carbon',weight:12.0107	,symbol:'C'},
//       {position:7,name:'nitrogen',weight:14.0067	,symbol:'N'}, 
//           {position:8,name:'oxygen',weight:15.9994	,symbol:'O'},
//      {position:9,name:'fluroine',weight:18.9984	,symbol:'F'},
//       {position:10,name:'neon',weight:20.1797	,symbol:'Ne'},

//     ];


//   private periodicService=inject(PeriodicService);

//   private _liveAnnouncer = inject(LiveAnnouncer);

//     displayedColumns:string[]=['position','name','weight','symbol'];

//      dataSource=new MatTableDataSource<PeriodicElement>(this.Periodicing);

//   @ViewChild(MatSort) sort!:MatSort;

//    ngOnInit(): void {
//         this.loadPeriodicData();
//    }

//   loadPeriodicData(){
//      this.periodicService.getPeriodicData().subscribe({
//        next:(data:any)=>{
//            this.dataSource.data=data;
//        },
//        error:(error:any)=>{
//           console.error('API Error:',error);
//       }
    
//      })
//    }


//  ngAfterViewInit(): void {
//     this.dataSource.sort=this.sort;
//  }


//  announceSortChange(sort:Sort){
//      if(sort.direction){
//         this._liveAnnouncer.announce(`sorted ${sort.direction}ending`);
//      }
//      else{
//        this._liveAnnouncer.announce(`sorting cleared`);
//      }
//    }




















// @ViewChild(MatSort) sort!:MatSort;

// ngAfterViewInit(): void {
//   this.dataSource.sort=this.sort;
// }


// announceSortChange(sortState:Sort){

//           if(sortState.direction){
//                  this.liveAnnouncer.announce(`sorted ${this.sort.direction} ending`);
//           }
//           else{
//                  this.liveAnnouncer.announce('sorting cleared');
//           }



// }























// //   desserts:Dessert[]=[
// //     {name:'frozen yougurt',calories:123,fat:4,carb:44,protien:7},
// //     {name:'icecream sandwich',calories:321,fat:9,carb:66,protien:4},
// //     {name:'eclair',calories:443,fat:18,carb:21,protien:4},
// //     {name:'Cupcake',calories:191,fat:10,carb:69,protien:5},
//     {name:'Gingerbread',calories:399,fat:23,carb:45,protien:3},

//   ];

//   sortedDessert:Dessert[];

//   constructor(){
//     this.sortedDessert=this.desserts.slice();
//   }

// sortData(sort:Sort){

//     const data=this.desserts.slice();

//   if(!sort.active||sort.direction===''){
//     this.sortedDessert=data;
//     return;
//   }


//   this.sortedDessert=data.sort((a,b)=>{
//       let isAsc = sort.direction==='asc';
//       switch(sort.active){
//          case 'name':
//            return compare(a.name,b.name,isAsc);
//           case 'calories':
//            return compare(a.calories,b.calories,isAsc);

//            case 'fat':
//            return compare(a.fat,b.fat,isAsc);
//            case 'carb':
//            return compare(a.carb,b.carb,isAsc);
//           case 'protien':
//            return compare(a.protien,b.protien,isAsc);
//            default:
//             return 0;

//           }

//   });
// }

// }
// function compare(a:number|string,b:number|string, isAsc:boolean) {
//   return (a <b ? -1:1)*(isAsc ? 1:-1);

// }

























// treeControl=new NestedTreeControl<Food>(node=>node.children??[]);
// dataSource=new MatTreeNestedDataSource<Food>();

// hasChild(_:number,node:Food){
//     return !!node.children && node.children.length>0;
// }



//   constructor(){
//           this.dataSource.data=[
//         {
//                name:'fruit',
//                children:[{name:'apple'},{name:'banana'},],
//         },

//        {
//          name:'vegetables',
//          children:[
//                     {
//                         name:'green',
//                         children:[{name:'broccoli'},{name:'sprouts'}],
//                     },
//                     {
//                         name:'orange',
//                        children:[{name:'pumpkins'},{name:'carrots'}],
//                     },
//                  ],
//       },
//     ];
//   }



// formBuilder=inject(FormBuilder);

// firstFormGroup=this.formBuilder.group({
//   firstCtrl:['',Validators.required]
// });

// secondFormGroup=this.formBuilder.group({
//   secondCtrl:['',Validators.required]
// });

// isEditable=false;








  
//   dialog=inject(MatDialog);

//   openDialog(){
//     this.dialog.open(ConfirmDialogComponent,{
//       data:{
//         animal:'panda'
//       }
//     });
//   }

// length=100;
// pageSize=10;
// showFirstLastButtons=true;
// pageSizeOptions=[5,10,25];
// pageIndex=0;

// handelPageEvent(event:PageEvent){
//     this.length=event.length;
//     this.pageSize=event.pageSize;
//     this.pageIndex=event.pageIndex;
// }

//  







































      





 
