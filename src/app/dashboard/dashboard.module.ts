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
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: DashboardWarapperComponent,
    canActivate: [AuthGuard], // Apply the auth guard to the parent route
    children: [
      { path: 'doner', component: DonerComponent, canActivate: [AuthGuard] },
      { path: 'doner-list', component: DonerListComponent, canActivate: [AuthGuard] },
      { path: 'volounteer', component: VolounteerComponent, canActivate: [AuthGuard] },
      { path: 'volounteer-list', component: VolounteerListComponent, canActivate: [AuthGuard] },
      { path: 'team', component: TeamComponent, canActivate: [AuthGuard] },
      { path: 'team-list', component: TeamListComponent, canActivate: [AuthGuard] },
      { path: 'board', component: BoardMemberComponent, canActivate: [AuthGuard] },
      { path: 'board-member-list', component: BoardMemberListComponent, canActivate: [AuthGuard] },
      { path: 'report', component: ReportComponent, canActivate: [AuthGuard] },
      { path: 'events', component: EventsComponent, canActivate: [AuthGuard], children: [
        { path: 'educational-event', component: EducationalEventComponent, canActivate: [AuthGuard] },
        { path: 'social-events', component: SocialEventComponent, canActivate: [AuthGuard] },
      ] },
      { path: 'work', component: EventsComponent, canActivate: [AuthGuard], children: [
        { path: 'education-training', component: EducationalTrainingComponent, canActivate: [AuthGuard] },
        { path: 'employment', component: EmploymentWorkComponent, canActivate: [AuthGuard] },
        { path: 'social-work', component: SocialWorkComponent, canActivate: [AuthGuard] },
        { path: 'skill', component: SkillDevlopmentComponent, canActivate: [AuthGuard] },
        { path: 'social-cultural', component: SocialCulturalWorkComponent, canActivate: [AuthGuard] },
      ] }
    ]
  }
];

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
    EducationalEventComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
