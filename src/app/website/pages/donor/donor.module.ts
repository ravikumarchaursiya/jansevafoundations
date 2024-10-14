import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorComponent } from './donor.component';
import { RouterModule,Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: DonorComponent }
];

@NgModule({
  declarations: [
    DonorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule
  ]
})
export class DonorModule { }
