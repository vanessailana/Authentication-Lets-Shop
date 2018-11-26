import { Component, OnInit } from '@angular/core';
import { Department } from './department.model';
import { DepartmentsService } from './departments.service';
import { Router } from '@angular/router';
import {Headers, Response} from '@angular/http';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit {

departments: Array<any>;
 totalRec : number;
  page: number = 1;


  constructor(private router: Router,private departmentService: DepartmentsService) { }

  ngOnInit() {
    this.departmentService.getAll().subscribe(data => {
      this.departments = data;
    });
  }

    editDepartmentPage(department: Department) {
    this.departmentService.setter(department);
     this.router.navigate(['/editdepartments']);
  }


    private loadProd(){


    this
            .departmentService
            .getAll()
            .subscribe((resp: Response) => {
                this.departments = resp.json();
                this.totalRec = this.departments.length;
                console.log(this.totalRec);
                console.log(this.page);

                //console.log(JSON.stringify(resp.json()));
            })
  }
}

