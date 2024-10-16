import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule,Routes } from '@angular/router';
import { SharedModule } from '../website/shared/shared.module';
import { VolounteerComponent } from './component/volounteer/volounteer.component';
import { VolounteerListComponent } from './component/volounteer-list/volounteer-list.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardWarapperComponent } from './dashboard-warapper/dashboard-warapper.component';
import { TeamComponent } from './component/team/team.component';
import { TeamListComponent } from './component/team-list/team-list.component';
import { DonerComponent } from './component/doner/doner.component';
import { DonerListComponent } from './component/doner-list/doner-list.component';

const routes:Routes = [{
  path:'',component:DashboardWarapperComponent
}]

@NgModule({
  declarations: [
    DashboardComponent,
    VolounteerComponent,
    VolounteerListComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSidebarComponent,
    DashboardWarapperComponent,
    TeamComponent,
    TeamListComponent,
    DonerComponent,
    DonerListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
