import { DOCUMENT } from '@angular/common';
import {  Component, ElementRef, Inject, Renderer2} from '@angular/core';
import * as jquery from 'jquery';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Donation';


}

