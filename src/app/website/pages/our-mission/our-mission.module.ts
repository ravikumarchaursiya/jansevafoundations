import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurMissionComponent } from './our-mission.component';
import { RouterModule,Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {path:'',component:OurMissionComponent}
]

@NgModule({
  declarations: [
    OurMissionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule
  ]
})
export class OurMissionModule { }
