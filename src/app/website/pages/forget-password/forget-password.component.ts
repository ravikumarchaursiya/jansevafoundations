import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with validation
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]] // Email validation
    });
  }

  // Getter for easier access to form controls in the template
  get email() {
    return this.forgotPasswordForm.get('email');
  }

  // Method triggered when form is submitted
  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;
      console.log('Email for password reset:', email);
      // You can add your password reset logic here (e.g., call API)
    } else {
      // Handle invalid form case if needed
      console.log('Form is invalid');
    }
  }

}
