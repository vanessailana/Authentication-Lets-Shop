import { Component, OnInit } from '@angular/core';
import { Aisle } from './aisle.model';
import { AisleService } from './aisle.service';
import { Router } from '@angular/router';
import {Headers, Response} from '@angular/http';

@Component({
  selector: 'app-aisles',
  templateUrl: './aisles.component.html',
  styleUrls: ['./aisles.component.css']
})
export class AislesComponent implements OnInit {
aisles: Array<any>;
 totalRec : number;
  page: number = 1;

  constructor(private router: Router,private aisleService: AisleService) { }

  ngOnInit() {
    this.aisleService.getAll().subscribe(data => {
      this.aisles = data;
    });
  }
      private loadProd(){


    this
            .aisleService
            .getAll()
            .subscribe((resp: Response) => {
                this.aisles = resp.json();
                this.totalRec = this.aisles.length;
                console.log(this.totalRec);
                console.log(this.page);

                //console.log(JSON.stringify(resp.json()));
            })
  }
    editAislePage(aisle: Aisle) {
    this.aisleService.setter(aisle);
     this.router.navigate(['/editaisle']);
  }
}
