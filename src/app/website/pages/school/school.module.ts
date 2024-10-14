import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SchoolComponent } from './school.component';
const routes: Routes = [
  { path: '', component:SchoolComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SchoolModule { }
