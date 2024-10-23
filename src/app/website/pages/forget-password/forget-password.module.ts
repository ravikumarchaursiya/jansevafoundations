import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const Route:Routes = [{
  path:'',component:ForgetPasswordComponent
}]


@NgModule({
  declarations: [
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Route),
    SharedModule
  ],

})
export class ForgetPasswordModule { }
