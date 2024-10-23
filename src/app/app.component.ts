import { DOCUMENT } from '@angular/common';
import {  Component, ElementRef, Inject, Renderer2,OnInit, AfterViewInit} from '@angular/core';
import * as jquery from 'jquery';
import { register } from 'swiper/element/bundle';
import * as AOS from 'aos';
import { NavigationEnd } from '@angular/router';
register();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Donation';
  router: any;
ngOnInit(){
  AOS.init({
    duration: 1200, // Duration of animation
  });
}
// ngAfterViewInit() {
//   this.router.events.subscribe(event => {
//     if (event instanceof NavigationEnd) {
//       AOS.refresh(); // Reinitialize AOS on route changes
//     }
//   });
// }
}

