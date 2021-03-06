import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { ProductsService } from './shared/products/products.service';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './pages/callback/callback.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { HelpAppComponent } from './pages/help-app/help-app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { AdminProductListComponent } from './pages/admin-product-list/admin-product-list.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { AislesComponent } from './pages/aisles/aisles.component';
import { EditDepartmentComponent } from './pages/departments/edit-department/edit-department.component';
import { EditAislesComponent } from './pages/aisles/edit-aisles/edit-aisles.component';
import { CreateOrdersComponent } from './pages/create-orders/create-orders.component';
import { WhensBestTimeOrderComponent } from './pages/whens-best-time-order/whens-best-time-order.component';
import { ComponentComponent } from './pages/component/component.component';
import { ItemsFreqPurchasedComponent } from './pages/items-freq-purchased/items-freq-purchased.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CallbackComponent,
    AdminComponent,ProductListComponent, CalculatorComponent, HelpAppComponent,  CreateProductComponent,  AdminProductListComponent, DepartmentsComponent, AislesComponent, EditDepartmentComponent, EditAislesComponent, CreateOrdersComponent, WhensBestTimeOrderComponent, ComponentComponent, ItemsFreqPurchasedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,NgxPaginationModule,  FormsModule,
    ReactiveFormsModule, Ng2SearchPipeModule
  ],
  providers: [AuthService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
