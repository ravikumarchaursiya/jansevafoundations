import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { RouterModule,Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { EducationalEventsComponent } from './educational-events/educational-events.component';
import { SocialEventsComponent } from './social-events/social-events.component';
import { AwrenessComponentComponent } from './awreness-component/awreness-component.component';
import { EventWrapperComponent } from './event-wrapper/event-wrapper.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';

const routes: Routes = [
  {
    path: '',component: EventWrapperComponent,children: [
      { path: '', redirectTo: 'events', pathMatch: 'full' }, // Redirect to /events by default
      { path: '', component: EventsComponent },
      { path: 'educational', component: EducationalEventsComponent },
      { path: 'awareness', component: AwrenessComponentComponent },
      { path: 'social', component: SocialEventsComponent },
      { path: 'event-registration', component: EventRegistrationComponent }
    ]
  }
];

@NgModule({
  declarations: [
    EventsComponent,
    EducationalEventsComponent,
    SocialEventsComponent,
    AwrenessComponentComponent,
    EventWrapperComponent,
    EventRegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class EventsModule { }
