import { Component, Directive, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;  // FormControl to bind to the input field
  @Input() placeholder: string = '';  // Placeholder text
  @Input() maxLength: number = 500;  // Maximum length
  @Input() minLength: number = 0;  // Minimum length
  @Input() type: string = 'text';  // Input type (text, email, password, etc.)
  @Input() isRequired: boolean = false;  // Required field
  @Input() label: string = '';  // Label for the input field
  @Input() decimalDirective: Directive | null = null;  // Directive to apply dynamically
  @Input() numberOnly: Directive | null = null;  // Directive to apply dynamically
  @Input() decimalPlaces: Directive | null = null;  // Directive to apply dynamically
  @Input() alphanum: Directive | null = null;  // Directive to apply dynamically
  constructor() { }

  ngOnInit(){
    if (this.control) {
      const validators = [];

      if (this.minLength) {
        validators.push(Validators.minLength(this.minLength));
      }

      if (this.maxLength) {
        validators.push(Validators.maxLength(this.maxLength));
      }

      if (this.isRequired) {
        validators.push(Validators.required);
      }

      // Only set validators if there are any
      if (validators.length > 0) {
        this.control.setValidators(validators);
        this.control.updateValueAndValidity(); // Call it properly with parentheses
      }
    }
  }

}
