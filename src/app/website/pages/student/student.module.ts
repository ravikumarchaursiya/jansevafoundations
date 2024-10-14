import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { RouterModule,Routes } from '@angular/router';
import { SchoolModule } from '../school/school.module';

const routes: Routes = [
  { path: '', component: SchoolModule }
];

@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class StudentModule { }
