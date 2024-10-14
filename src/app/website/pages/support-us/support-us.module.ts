import { NgModule } from '@angular/core';
import { SupportUsComponent } from './support-us.component';
import { RouterModule,Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes:Routes = [{
  path:'',component:SupportUsComponent
}]


@NgModule({
  declarations: [
    SupportUsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SupportUsModule { }
