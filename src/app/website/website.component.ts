import { DOCUMENT } from '@angular/common';
import {  Component,OnInit, AfterViewInit, Renderer2, ElementRef, Inject} from '@angular/core';

interface JQuery {
  owlCarousel(options?: any): JQuery;
}
declare var $: any;
@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent  {
  // doc: any;
  // elementRef: any;

 
  constructor(private renderer: Renderer2, private el: ElementRef,@Inject(DOCUMENT) private doc ) 
  { 
  } 
 
  ngOnInit() {
    this.loadThemeStyles();
    this.loadThemeScripts();
  }

  private loadThemeStyles() {
    const styleLink = this.renderer.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = 'assets/css/main.css';
    this.renderer.appendChild(document.head, styleLink);
  }

  private loadThemeScripts() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/main.js';
    this.renderer.appendChild(document.body, script);
  }
}
