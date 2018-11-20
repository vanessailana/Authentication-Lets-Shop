import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsService } from './shared/products/products.service';
import { ComponentComponent } from './pages/component/component.component';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './pages/callback/callback.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AdminComponent } from './pages/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ComponentComponent,
    CallbackComponent,
    AdminComponent,ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,NgxPaginationModule
  ],
  providers: [AuthService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
