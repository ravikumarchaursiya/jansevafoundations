import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  @Input() rows: number = 5; // Number of rows
  @Input() cols: number = 20; // Number of columns
  @Input() label: any;
  @Input() placeholder: any;
  @Input() text: any;
  @Input() value: string = '';
  @Input() isRequired: boolean = false;
  @Input() isResizable: boolean = true;
  @Input() control: FormControl;
  @Input() maxLength: number = 300;  // Default to 300 if not provided
  @Input() minLength: number = 50;   // Default to 50 if not provided
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    // Optionally, you can set custom validators if provided by parent
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

  onValueChange(event: any): void {
    this.valueChange.emit(event.target.value);
  }
}
