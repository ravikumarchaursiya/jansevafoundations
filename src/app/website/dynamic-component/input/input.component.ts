import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

}
