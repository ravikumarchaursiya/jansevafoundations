// show-error.directive.ts

import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appShowError]'
})
export class ShowErrorDirective implements OnInit {
  @Input('appShowError') errorMessage: any; // Accepting error messages as an object

  constructor(private el: ElementRef, private renderer: Renderer2, private control: NgControl) {}

  ngOnInit() {
    this.control.statusChanges.subscribe(status => {
      if (status === 'INVALID') {
        this.showError();
      } else {
        this.hideError();
      }
    });
  }

  private showError() {
    this.hideError(); // Ensure any previous errors are cleared
    const errors = this.control.errors;
    if (errors) {
      let message = '';
      if (errors['required']) {
        message = this.errorMessage.required || 'This field is required';
      } else if (errors['min']) {
        message = this.errorMessage.min || `Minimum value is ${errors['min'].min}`;
      } else if (errors['max']) {
        message = this.errorMessage.max || `Maximum value is ${errors['max'].max}`;
      } else if (errors['email']) {
        message = this.errorMessage.email || 'Invalid email address';
      }

      if (message) {
        const errorElement = this.renderer.createElement('span');
        const text = this.renderer.createText(message);
        this.renderer.appendChild(errorElement, text);
        this.renderer.addClass(errorElement, 'error-message');
        this.renderer.setStyle(errorElement, 'color', 'red');
        this.renderer.appendChild(this.el.nativeElement.parentNode, errorElement);
        this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', '0'); // Ensure margin between input and error message
        this.renderer.setStyle(errorElement, 'display', 'block'); // Ensure error message is on a new line
      }
    }
  }

  private hideError() {
    const parent = this.el.nativeElement.parentNode;
    const errorElement = parent.querySelector('.error-message');
    if (errorElement) {
      this.renderer.removeChild(parent, errorElement);
    }
  }
}
