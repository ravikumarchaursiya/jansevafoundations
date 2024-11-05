// import { Directive, HostListener } from '@angular/core';

// @Directive({
//   selector: '[numericOnly]'
// })
// export class NumericOnlyDirective {

//   constructor() { }

//   @HostListener('keypress', ['$event'])
//   onKeyPress(event: KeyboardEvent): void {
//     const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     if (!allowedKeys.includes(event.key)) {
//       event.preventDefault();
//     }
//   }

import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[numericOnly]'
})
export class NumericOnlyDirective {

  constructor() { }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
  }
}


