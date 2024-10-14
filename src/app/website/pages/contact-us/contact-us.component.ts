import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  contactForm: FormGroup;
  thankYouMessage: string;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      subject: [''],
      message: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.thankYouMessage = "Thank you for getting in touch!";
      this.contactForm.reset();
    }
  }

}
