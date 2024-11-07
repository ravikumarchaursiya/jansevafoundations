import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UtilityService } from 'src/app/common/utility.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-board-member',
  templateUrl: './board-member.component.html',
  styleUrls: ['./board-member.component.scss']
})
export class BoardMemberComponent implements OnInit {
  myForm: FormGroup;
  baseUrl = ''
  constructor(private fb: FormBuilder, private toastr: ToastrService,private utility:UtilityService,private dservice:DashboardService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      profileImage: ['',Validators.required],
      description: new FormControl('')
    });
  }
  get descriptionControl(): FormControl {
    return this.myForm.get('description') as FormControl;
  }
  get profileImageControl(): FormControl {
    return this.myForm.get('profileImage') as FormControl;
  }
  get emailControl(): FormControl {
    return this.myForm.get('email') as FormControl;
  }
  get phoneControl(): FormControl {
    return this.myForm.get('phone') as FormControl;
  }
  onImageSelected(file: File | null): void {
    this.myForm.get('profileImage')?.setValue(file); // Set the form control value
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      debugger;
      // Create FormData to handle file and other form data
      const formData = new FormData();
  
      // Loop through the form controls
      Object.keys(this.myForm.controls).forEach(controlName => {
        const control = this.myForm.get(controlName);
  
        if (control instanceof FormControl) {
          const value = control.value;
  
          // If the control is the profileImage and has a file, append it
          if (controlName === 'profileImage' && value) {
            formData.append('profileImage', value, value.name); // Use the file object
          } else {
            formData.append(controlName, value); // Append other form control values
          }
        }
      });
  
      // Now submit the form data
      this.dservice.addBoardMember(this.baseUrl, formData).subscribe(res => {
        if (res) {
          this.toastr.success('Form Submitted Successfully');
          console.log('Form Value:', formData); // Log the FormData if necessary
        }
      });
    } else {
      this.toastr.error('Form Is Invalid');
      this.myForm.markAllAsTouched();
    }
  }
  
  back(){
    this.utility.back()
  }
}
