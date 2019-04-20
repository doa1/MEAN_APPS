import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  employee = {};
  constructor(private empService: EmployeeService,
    private routelink: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.getEmployee(this.routelink.snapshot.params['id']);
  }
  getEmployee(id) {
    this.empService.getEmployee(id)
      .subscribe(result => {
        this.employee = result;
        console.log(result);
      },
        (err) => {
          console.log('ERROR: ' , err);
        });
  }

}
