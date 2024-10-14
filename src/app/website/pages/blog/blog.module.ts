import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule,Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes:Routes=[{path:'',component:BlogComponent}]

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class BlogModule { }
