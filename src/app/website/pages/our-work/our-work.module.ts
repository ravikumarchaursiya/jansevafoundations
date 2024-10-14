import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurWorkComponent } from './our-work.component';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { WomenEmpowermentComponent } from './women-empowerment/women-empowerment.component';
import { HealthComponent } from './health/health.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { OurWorkWrapperComponent } from './our-work-wrapper/our-work-wrapper.component';
import { EmploymentComponent } from './employment/employment.component';
import { SocialComponent } from './social/social.component';
import { SkillDevlopmentComponent } from './skill-devlopment/skill-devlopment.component';

const routes: Routes = [
  {
    path: '', component: OurWorkWrapperComponent, children: [
      { path: '', component: OurWorkComponent },
      { path: '', redirectTo: 'our-work', pathMatch: 'full' },
      { path: 'education&training', component: EducationComponent },
      { path: 'social-empowerment', component: WomenEmpowermentComponent },
      { path: 'health', component: HealthComponent },
      { path: 'employment', component: EmploymentComponent },
      { path: 'social', component: SocialComponent },
      { path: 'skill-development',component:SkillDevlopmentComponent}
    ]
  }
]
@NgModule({
  declarations: [
    OurWorkComponent,
    OurWorkWrapperComponent,
    EducationComponent,
    WomenEmpowermentComponent,
    HealthComponent,
    EmploymentComponent,
    SocialComponent,
    SkillDevlopmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OurWorkModule { }
