import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    component: AdminProductListComponent,canActivate: [
      AuthGuard,AdminGuard
    ]
  },

  {
    path: 'offered',
    component: ProductListComponent
  },
 {
    path: 'chat',
    component: HelpAppComponent,canActivate: [
      AuthGuard
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
    path: 'admin', component:AdminComponent,
    canActivate: [AdminGuard, AuthGuard

    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path:'chat',
    component: HelpAppComponent
  },
   {
    path:'calc',
    component: CalculatorComponent,  canActivate: [
      AuthGuard
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthGuard,
    AdminGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
