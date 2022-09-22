import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { BackendService} from '../backend.service'

interface Employee{
  name:string
  dob: string
  designation:string
  organzn: string
  gender:string
  time:string
  file:string
  empid: string

}

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;


  constructor(private fb: FormBuilder, private service: BackendService) { }

  ngOnInit(): void {
    let time = moment(new Date().getTime()).format('HH:mm');
    // console.log(time)
    this.employeeForm = this.fb.group({
      name:['',Validators.required],
      dob:['',Validators.required],
      designation:['',Validators.required],
      organzn:['',Validators.required],
      gender:['',Validators.required],
      time:[time,Validators.required],
      file:['',Validators.required],
      empid:['',Validators.required]
    })

  }
  saveEmployee(employee: Employee){
    // console.log(employee)
    this.employeeForm.markAllAsTouched()
    if(this.employeeForm.valid){
      // console.log('valid',employee)
      this.service.saveEmployee(employee).subscribe({
        next:(data)=>{
          // console.log('data',data)
          this.clearForm();
        },
        error:err=>{
          console.log('error',err)
        }
      })
    }

  }
  clearForm(){
    this.employeeForm.reset();
    this.employeeForm.get('time')?.setValue(moment(new Date().getTime()).format('HH:mm'));
  }
  timeChange(){
    this.employeeForm.get('time')?.setValue(moment(new Date().getTime()).format('HH:mm'));
  }

}
