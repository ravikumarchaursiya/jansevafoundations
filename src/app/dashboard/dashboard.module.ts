import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule,Routes } from '@angular/router';
import { SharedModule } from '../website/shared/shared.module';

const routes:Routes = [{
  path:'dashboard',component:DashboardComponent
}]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
