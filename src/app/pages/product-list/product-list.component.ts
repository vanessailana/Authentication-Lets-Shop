import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products/products.service';
import {Headers, Response} from '@angular/http';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products: Array<any>;
 totalRec : number;
  page: number = 1;


  constructor(private prodService: ProductsService) {
 this.products = new Array<any>();
  }

  ngOnInit() {
    this.prodService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  private loadProd(){


    this
            .prodService
            .getAll()
            .subscribe((resp: Response) => {
                this.products = resp.json();
                this.totalRec = this.products.length;
                console.log(this.totalRec);
                console.log(this.page);

                //console.log(JSON.stringify(resp.json()));
            })
  }

}
