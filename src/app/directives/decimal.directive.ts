import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
@Directive({
  selector: '[restrictDecimal]'
})
export class DecimalDirective implements OnInit {
  @Input() toDecimalPlaces: any;
  private regex: RegExp = new RegExp(/^[0-9]+[0-9]*[.]?[0-9]{0,2}$/g);
  private specialKeys: Array<string> = ['Delete', 'Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight'];
  constructor(private el: ElementRef) { }
  ngOnInit() {
    if (this.toDecimalPlaces) {
      this.regex = new RegExp(`^[0-9]+[0-9]*[.]?[0-9]{0,${this.toDecimalPlaces}}$`, 'g');
    }
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    // const next: string = [current.slice(0, position), event.key, current.slice(position)].join('');
    const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}