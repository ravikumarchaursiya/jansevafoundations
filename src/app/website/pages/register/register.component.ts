import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  roles:any 

  constructor(private fb: FormBuilder,private toastr:ToastrService) {
    this.roles  = ['Donor', 'Volunteer', 'Admin', 'Member'];
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
       this.toastr.success('You Have Register Successfully')
      // Call your API to register the user
    } else {
      this.toastr.error('Form is invalid')
    }
  }

  // Utility function to access form controls
  get f() {
    return this.registerForm.controls;
  }
}
