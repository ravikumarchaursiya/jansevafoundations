import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[textLength]'
})
export class TextLengthDirective {
  private maxLength: number = 1000;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    const inputElement = this.el.nativeElement as HTMLTextAreaElement;
    if (inputElement.value.length > this.maxLength) {
      this.renderer.setProperty(inputElement, 'value', inputElement.value.slice(0, this.maxLength));
    }
  }
}
