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
import { BoardMemberComponent } from './component/board-member/board-member.component';
import { BoardMemberListComponent } from './component/board-member-list/board-member-list.component';
import { EventsComponent } from './component/events/events/events.component';

const routes:Routes = [{
  path:'',component:DashboardWarapperComponent,children:[
    {path:'doner',component:DonerComponent},
    {path:'doner-list',component:DonerListComponent},
    {path:'volounteer',component:VolounteerComponent},
    {path:'volounteer-list',component:VolounteerListComponent},
    {path:'team',component:TeamComponent},
    {path:'team-list',component:TeamListComponent},
  ]
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
    DonerListComponent,
    BoardMemberComponent,
    BoardMemberListComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
