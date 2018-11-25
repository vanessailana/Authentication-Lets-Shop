import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../core/core.module';
import { ADMIN_ROUTES } from './admin.routes';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
      BrowserAnimationsModule,  RouterModule.forChild(ADMIN_ROUTES)
  ],
  declarations: [
    AdminComponent

  ]
})
export class AdminModule { }
