import {Directive,ElementRef,Input,OnInit, Renderer2} from '@angular/core'

@Directive({
  selector:'[app-required]',
})

export class AppRequiredDirective implements OnInit{
  @Input() appIsRequired: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.appIsRequired) {
      const asterisk = this.renderer.createElement('span');
      const text = this.renderer.createText(' *');
      this.renderer.appendChild(asterisk, text);
      this.renderer.setStyle(asterisk, 'color', 'red');
      this.renderer.appendChild(this.el.nativeElement, asterisk);
    }
  }

}


