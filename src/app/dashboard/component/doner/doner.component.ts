import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UtilityService } from 'src/app/common/utility.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-doner',
  templateUrl: './doner.component.html',
  styleUrls: ['./doner.component.scss']
})
export class DonerComponent implements OnInit {
  donerForm: FormGroup;
  donersList: any[] = [];
 id:any
 isEditable : boolean = false
 baseUrl = '/'
  constructor(private fb: FormBuilder,private toastr:ToastrService,private location:Location,private utility:UtilityService,private dservice:DashboardService) {
    this.donerForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      profileImage: ['',Validators.required],
      description: new FormControl('')
    });
  }
ngOnInit(): void {
    
}
get descriptionControl(): FormControl {
  return this.donerForm.get('description') as FormControl;
}
get profileImageControl(): FormControl {
  return this.donerForm.get('profileImage') as FormControl;
}
get emailControl(): FormControl {
  return this.donerForm.get('email') as FormControl;
}
get phoneControl(): FormControl {
  return this.donerForm.get('phone') as FormControl;
}
onSubmit(): void {
  if (this.donerForm.valid) {
    debugger;
    // Create FormData to handle file and other form data
    const formData = new FormData();

    // Loop through the form controls
    Object.keys(this.donerForm.controls).forEach(controlName => {
      const control = this.donerForm.get(controlName);

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
    this.dservice.addDoner(this.baseUrl, formData).subscribe(res => {
      if (res) {
        this.toastr.success('Form Submitted Successfully');
        console.log('Form Value:', formData); // Log the FormData if necessary
      }
    });
  } else {
    this.toastr.error('Form Is Invalid');
    this.donerForm.markAllAsTouched();
  }
}

back(){
  this.utility.back()
}
}
