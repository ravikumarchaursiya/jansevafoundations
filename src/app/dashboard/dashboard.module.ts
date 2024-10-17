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
import { EventsComponent } from './component/events/events.component';
import { ReportComponent } from './Report/report/report.component';
import { WorksComponent } from './component/work/works/works.component';
import { EducationalTrainingComponent } from './component/work/educational-training/educational-training.component';
import { SocialWorkComponent } from './component/work/social-work/social-work.component';
import { EmploymentWorkComponent } from './component/work/employment-work/employment-work.component';
import { SocialCulturalWorkComponent } from './component/work/social-cultural-work/social-cultural-work.component';
import { SkillDevlopmentComponent } from './component/work/skill-devlopment/skill-devlopment.component';
import { SocialEventComponent } from './component/events/social-events/social-event.component';
import { EducationalEventComponent } from './component/events/educational/educational-event/educational-event.component';


const routes:Routes = [{
  path:'',component:DashboardWarapperComponent,children:[
    {path:'doner',component:DonerComponent},
    {path:'doner-list',component:DonerListComponent},
    {path:'volounteer',component:VolounteerComponent},
    {path:'volounteer-list',component:VolounteerListComponent},
    {path:'team',component:TeamComponent},
    {path:'team-list',component:TeamListComponent},
    {path:'board',component:BoardMemberComponent},
    {path:'board-member-list',component:BoardMemberListComponent},
    {path:'report',component:ReportComponent},
    {path:'events',component:EventsComponent,children:[
      {path:'educational-event',component:EducationalEventComponent},
      {path:'social-events',component:SocialEventComponent},
    ]},
    {path:'work',component:EventsComponent,children:[
      {path:'education-training',component:EducationalTrainingComponent},
      {path:'employment',component:EmploymentWorkComponent},
      {path:'social-work',component:SocialWorkComponent},
      {path:'skill',component:SkillDevlopmentComponent},
      {path:'social-cultural',component:SocialCulturalWorkComponent},
    ]}
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
    EventsComponent,
    ReportComponent,
    WorksComponent,
    EducationalTrainingComponent,
    SocialWorkComponent,
    EmploymentWorkComponent,
    SocialCulturalWorkComponent,
    SkillDevlopmentComponent,
    SocialEventComponent,
    EducationalEventComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
