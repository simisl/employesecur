import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http'

interface Employee{
  name:string
  dob: string
  designation:string
  organzn: string
  gender:string
  time:string
  file:string
  empid : string
}
interface t{
  token:string
}
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  loadEmployees(){
    return this.http.get<Employee[]>(`${environment.baseUrl}/list`,{ headers:{
      'Content-Type': 'application/json',
      'Cache-Control' : 'no-cache'
    }})

  }
  saveEmployee(emp: Employee){
    // console.log(emp)
    return this.http.post(`${environment.baseUrl}/new`,emp)
  }
  authenticate(id: string){

    return this.http.get<t>(`${environment.baseUrl}/auth/${id}`)

  }
}
