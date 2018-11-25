
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

import{Product}  from '../models/product.model';
import { ProductsService } from '../../shared/products/products.service';
import {Headers, Response} from '@angular/http';
@Component({
  selector: 'admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class  AdminProductListComponent implements OnInit {
  products: Product[];
   totalRec : number;
  page: number = 1;


  constructor(private router: Router, private productService: ProductsService) {

  }

  ngOnInit() {
    this.productService.getAll()
      .subscribe( data => {
        this.products = data;
      });


  };


   deleteProduct(product: Product): void {
    this.productService.deleteProduct(product)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      })
  };

  editProductPage(product: Product) {
    this.productService.setter(product);
     this.router.navigate(['/create']);
  }

  private loadProd(){


    this
            .productService
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
