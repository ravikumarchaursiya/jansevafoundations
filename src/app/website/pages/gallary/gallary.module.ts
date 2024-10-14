import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallaryComponent } from './gallary.component';
import { RouterModule,Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { GalleryService } from '../../Services/gallery.service';


const routes:Routes=[{path:'',component:GallaryComponent}]

@NgModule({
  declarations: [
    GallaryComponent,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers:[GalleryService]

})
export class GallaryModule { }
