import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteersComponent } from './volunteers.component';
import { RouterModule,Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes:Routes =[{
path:'',component:VolunteersComponent
}]

@NgModule({
  declarations: [
    VolunteersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class VolunteersModule { }
