import { Employee } from './../employee.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employee: any = {};
  constructor(private empService: EmployeeService,
    private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    // this.addEmployee (this.route);
  }
  addEmployee() {
    console.log(this.employee);
    this.empService.addEmployee(this.employee)
      .subscribe(res => {
        // actually redirect to the employee detail view
        const id = res[0]['_id'];
        console.log('my id', id);
        console.log(res);
         this.route.navigate(['show', id]);
       },
        error => {
          console.log('Error Adding employee: ', error);
        }
       );
  }
}
