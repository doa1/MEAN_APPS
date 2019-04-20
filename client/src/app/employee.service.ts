import { Employee } from './employee.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { BASE_URL_CONFIG } from './config';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: any = [];
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(BASE_URL_CONFIG)
          .pipe(map(res => res));
  }
  getEmployee(id) {
    return this.http.get(BASE_URL_CONFIG + id)
          .pipe(map((res) =>  res ));
  }
  addEmployee(info) {
    return this.http.post(BASE_URL_CONFIG + 'create' , info)
          .pipe(map(res => res));
  }
  deleteEmployee(id) {
    return this.http.delete(BASE_URL_CONFIG + 'delete/' + id)
          .pipe(map(res => res));
  }
  updateEmployees(id, info) {
    return this.http.put(BASE_URL_CONFIG + 'update/' + id, info)
          .pipe(map(res => res));
  }
}
