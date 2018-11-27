import { Component, OnInit } from '@angular/core';
import{Product}  from '../models/product.model';
import{Router}  from '@angular/router';
import { ProductsService } from '../../shared/products/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

private product:Product;
  constructor(private _productService:ProductsService,private _rotuer:Router) { }

  ngOnInit() {
    this.product=this._productService.getter();
  }

    processForm(){
    if(this.product.id==undefined){
       this._productService.createProduct(this.product).subscribe((product)=>{
         console.log(product);
         alert("Product has just been added")
         this._rotuer.navigate(['/offered']);
       },(error)=>{
         console.log(error);
       });
 }else{
       this._productService.updateProduct(this.product).subscribe((product)=>{
         console.log(product);
         alert("product has just been update");
         this._rotuer.navigate(['/products']);
       },(error)=>{
         console.log(error);
       });
    }

    }

    }




