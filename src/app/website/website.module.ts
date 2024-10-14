import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsLetterComponent } from './footer/news-letter/news-letter.component';
import { NavigationComponent } from './footer/navigation/navigation.component';
import { AddressComponent } from './footer/address/address.component';
import { CopyRightComponent } from './footer/copy-right/copy-right.component';
import { SocialIconComponent } from './footer/social-icon/social-icon.component';
import { SharedModule } from './shared/shared.module';
import { LightboxComponent } from './footer/lightbox/lightbox.component';





const routes: Routes = [
  {
    path: '', component: WebsiteComponent, children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'school', loadChildren: () => import('./pages/school/school.module').then(m => m.SchoolModule) },
      { path: 'donor', loadChildren: () => import('./pages/donor/donor.module').then(m => m.DonorModule) },
      { path: 'student', loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule) },
      { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
      { path: 'our-mission', loadChildren: () => import('./pages/our-mission/our-mission.module').then(m => m.OurMissionModule) },
      { path: 'contact-us', loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
      { path: 'gallery',loadChildren:() => import('./pages/gallary/gallary.module').then(m => m.GallaryModule)},
      // { path: 'ChildGallery',loadChildren:() => import('./pages/gallary/gallary/photos.module').then(m => m.PhotosModule)},
      // { path: 'EventGallery',loadChildren:() => import('./pages/gallary/gallary/video.module').then(m => m.VideosModule)},
      { path: 'support-us',loadChildren:()=> import('./pages/support-us/support-us.module').then(m=>m.SupportUsModule)},
      { path: 'donate',loadChildren:()=> import ('./pages/donate/donate.module').then (m=> m.DonateModule)},
      { path: 'our-work',loadChildren:()=> import('./pages/our-work/our-work.module').then(m=> m.OurWorkModule)},
      { path: 'donate', loadChildren:()=> import('./pages/donate/donate.module').then (m=> m.DonateModule)},
      { path: 'volunteer', loadChildren:()=> import('./pages/volunteers/volunteers.module').then (m=> m.VolunteersModule)},
      { path: 'events', loadChildren:()=> import('./pages/events/events.module').then (m=> m.EventsModule)},
      { path: 'blog', loadChildren:()=> import('./pages/blog/blog.module').then (m=> m.BlogModule)}
    ]
  }
];

@NgModule({
  declarations: [WebsiteComponent, 
    HeaderComponent, 
    FooterComponent, 
    NewsLetterComponent, 
    NavigationComponent, 
    AddressComponent, 
    CopyRightComponent, 
    SocialIconComponent, LightboxComponent, 
     ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
    
  ],
  providers:[],
 
  exports:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class WebsiteModule { }
