import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCharSpaceOnly]'
})
export class CharSpaceOnlyDirective {

  private regex: RegExp = new RegExp(/^[a-zA-Z\s]*$/);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'];

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    // Allow special keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    // Prevent invalid characters
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
