import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  empId!: string;
  token!: string;
  constructor(private service: BackendService, private router: Router) { }

  ngOnInit(): void {

  }
  authenticate(){
    this.service.authenticate(this.empId).subscribe({
      next:data=>{
        if(data != null){
          localStorage.setItem('token',JSON.stringify(data.token))
          this.router.navigate(['employees'])
        }
        else{
          alert('Employee Id not found')
        }

      },
      error:err=>{
        console.log('err',err)
      }
    })
  }
}
