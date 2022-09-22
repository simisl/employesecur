import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { BackendService } from '../backend.service';
import { Router } from '@angular/router';


interface Employee{
  name:string
  dob: string
  designation:string
  organzn: string
  gender:string
  time:string
  file:string
  empid:string
}
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  list!:Employee[];
  status:any;
  inputCtrl!:FormControl;
  dataSource!:MatTableDataSource<Employee>;
  col = ['empid','name','dob','designation','organzn','gender','time','file'];

  names!:string[]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('input') input!: ElementRef;
  constructor(private service: BackendService, private router: Router) { }
  ngAfterViewInit() {
    // console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Employee>()
    this.service.loadEmployees().subscribe({
      next:(data)=>{
        this.status = data
        if(this.status !== 401){
          this.list = data
          this.dataSource.data = this.list;
          // console.log('listing',this.list)
        }
        if(this.status === 401){
          alert('Token expired! Authenticate again')
          this.router.navigate(['verification'])
        }
      },
      error:(er)=>{
        console.log('loading error')
      }

    }
    );
    this.names = []
    var that = this
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      if(data.name.toLowerCase().includes(filter)){

        that.names.push(data.name)
      }


      that.names = [...new Set(that.names)]
      return data.name.toLowerCase().includes(filter)
    };

  }
  filterValue(data: string){
    this.names =[]
    this.input.nativeElement.value = data
    data = data.trim();
    data = data.toLowerCase();
    this.dataSource.filter = data;


  }


}
