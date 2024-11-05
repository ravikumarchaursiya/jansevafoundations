import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[autocomplete]'
})
export class AutoCompleteDirective implements AfterViewInit {
  constructor(private _el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Check if window is defined to avoid issues in non-browser environments
    if (typeof window !== 'undefined') {
      let isChrome = /chrome/.test(navigator.userAgent.toLowerCase());
      if (isChrome) {
        this.renderer.setAttribute(this._el.nativeElement, 'autocomplete', 'off');
        this.renderer.setAttribute(this._el.nativeElement, 'autocorrect', 'off');
        this.renderer.setAttribute(this._el.nativeElement, 'autocapitalize', 'off');
        this.renderer.setAttribute(this._el.nativeElement, 'spellcheck', 'false');
      }
    }
  }
}
