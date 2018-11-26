import { Component, OnInit } from '@angular/core';
import {Aisle}  from '../aisle.model';
 import{Router}  from '@angular/router';
import { AisleService } from '../aisle.service';

@Component({
  selector: 'app-edit-aisles',
  templateUrl: './edit-aisles.component.html',
  styleUrls: ['./edit-aisles.component.css']
})
export class EditAislesComponent implements OnInit {

private aisle:Aisle;
  constructor(private _aisleService:AisleService,private _rotuer:Router) { }

  ngOnInit() {
    this.aisle=this._aisleService.getter();
  }

    processForm(){

       this._aisleService.updateAisle(this.aisle).subscribe((aisle)=>{
         console.log(aisle);
         alert("Aisle has just been update");
         this._rotuer.navigate(['/aisles']);
       },(error)=>{
         console.log(error);
       });
    }



    }
