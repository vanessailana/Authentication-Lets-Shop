import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
// Page components
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { HelpAppComponent } from './pages/help-app/help-app.component';
import { AdminProductListComponent } from './pages/admin-product-list/admin-product-list.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { AislesComponent } from './pages/aisles/aisles.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { EditDepartmentComponent } from './pages/departments/edit-department/edit-department.component';
import { EditAislesComponent } from './pages/aisles/edit-aisles/edit-aisles.component';
import { WhensBestTimeOrderComponent } from './pages/whens-best-time-order/whens-best-time-order.component';
import { ItemsFreqPurchasedComponent } from './pages/items-freq-purchased/items-freq-purchased.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'itemsfreqpurchased',
    component: ItemsFreqPurchasedComponent
  },
   {
    path: 'besttimeorder',
    component: WhensBestTimeOrderComponent
  },
    {
    path: 'editaisle',
    component: EditAislesComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
   {
    path: 'editdepartments',
    component: EditDepartmentComponent
  },
   {
    path: 'adminproductpanel',
    component: AdminProductListComponent
  },
  {
    path: 'offered',
    component: ProductListComponent
  },

 {
    path: 'chat',
    component: HelpAppComponent
  },
{
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
    {
    path: 'admin', component:AdminComponent
  },
  {
    path: 'aisles', component:AislesComponent

  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
   {
    path:'calc',
    component: CalculatorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
