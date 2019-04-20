import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private employee:any ={};
  constructor(public empService:EmployeeService, private routerLink: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {
      this.getEmployee(this.routerLink.snapshot.params['id']);
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
  editEmployee(){
    let id= this.routerLink.snapshot.params['id'];
    console.log('id passed',id);
    if (this.employee){
      console.log('details being updated',this.employee);
      this.empService.updateEmployees(id,this.employee)
          .subscribe(result =>{
            this.route.navigate(['show',id]);
          },
            (error)=>{console.log('error editing ....',error)});
    }
  }

}
