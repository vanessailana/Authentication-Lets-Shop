import { Component, OnInit } from '@angular/core';
import{Department}  from '../department.model';
 import{Router}  from '@angular/router';
import { DepartmentsService } from '../departments.service';
@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {


private department:Department;
  constructor(private _departmentService:DepartmentsService,private _rotuer:Router) { }

  ngOnInit() {
    this.department=this._departmentService.getter();
  }

    processForm(){

       this._departmentService.updateDepartment(this.department).subscribe((department)=>{
         console.log(department);
         alert("Department has just been update");
         this._rotuer.navigate(['/departments']);
       },(error)=>{
         console.log(error);
       });
    }



    }
