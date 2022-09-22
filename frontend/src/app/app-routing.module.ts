import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/new',
    pathMatch: 'full'
  },
  {
    path:'new',
    component:NewEmployeeComponent
  },
  {
    path:'employees',
    component:EmployeeListComponent
  },
  {
    path:'verification',
    component:AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
