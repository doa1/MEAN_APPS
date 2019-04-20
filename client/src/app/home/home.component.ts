import { Employee } from './../employee.interface';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: any;
  delmessage: string;
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
   this.getEmployees();

    }
    getEmployees() {
      return this.empService.getEmployees()
                .subscribe(gotEmployees => {
                  this.employees = gotEmployees;
                });
    }
    deleteEmployee(id) {
      // ask first
      let confirmation = confirm('Are you sure you want to delete this employee?');
      if (confirmation) {
        return this.empService.deleteEmployee(id)
            .subscribe( () => {
              this.delmessage = 'Employee data deleted successfully';
              this.getEmployees();
            }, err => {
              console.log(err);
            });
        }
        return false;

    }
}
