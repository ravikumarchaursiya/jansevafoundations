import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { AboutService } from '../../Services/about.service';
import { FoundersMessageComponent } from './founders-message/founders-message.component';
import { BoardMembersComponent } from './board-members/board-members.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { DonersComponent } from './doners/doners.component';
import { WrapperComponent } from './wrapper/wrapper.component';


const routes: Routes = [
  {
    path: '', component: WrapperComponent, children: [
      { path:'',redirectTo: 'about', pathMatch: 'full'},
      { path:'',component:AboutComponent},
      { path: 'founders-message', component: FoundersMessageComponent },
      { path: 'board-members', component: BoardMembersComponent },
      { path: 'team-members', component: TeamMembersComponent },
      { path: 'doners', component: DonersComponent }
    ]
  }
]



@NgModule({
  declarations: [
    AboutComponent,
    FoundersMessageComponent,
    BoardMembersComponent,
    TeamMembersComponent,
    DonersComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule
  ],
  providers: [AboutService]
})
export class AboutModule { }
