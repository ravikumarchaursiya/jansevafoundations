import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes = [{
  path:'',component:PhotosComponent
}]

@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PhotosModule { }
