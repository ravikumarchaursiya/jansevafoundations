import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UtilityService } from 'src/app/common/utility.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-volounteer',
  templateUrl: './volounteer.component.html',
  styleUrls: ['./volounteer.component.scss']
})
export class VolounteerComponent  {
  volounteerForm: FormGroup;
  membersList: any[] = [];
 id:any
 isEditable:boolean =  false
 baseUrl = '/'
 constructor(private fb: FormBuilder,private toastr:ToastrService,private location:Location,private utility:UtilityService,private dservice:DashboardService) {
    this.volounteerForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      profileImage: ['',Validators.required],
      description: new FormControl('')
    });
  }
ngOnInit(): void {
    
}
get descriptionControl(): FormControl {
  return this.volounteerForm.get('description') as FormControl;
}
get profileImageControl(): FormControl {
  return this.volounteerForm.get('profileImage') as FormControl;
}
get emailControl(): FormControl {
  return this.volounteerForm.get('email') as FormControl;
}
get phoneControl(): FormControl {
  return this.volounteerForm.get('phone') as FormControl;
}
onSubmit(): void {
  if (this.volounteerForm.valid) {
    debugger;
    // Create FormData to handle file and other form data
    const formData = new FormData();

    // Loop through the form controls
    Object.keys(this.volounteerForm.controls).forEach(controlName => {
      const control = this.volounteerForm.get(controlName);

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
    this.dservice.addVolounteer(this.baseUrl, formData).subscribe(res => {
      if (res) {
        this.toastr.success('Form Submitted Successfully');
        console.log('Form Value:', formData); // Log the FormData if necessary
      }
    });
  } else {
    this.toastr.error('Form Is Invalid');
    this.volounteerForm.markAllAsTouched();
  }
}

back(){
  this.utility.back()
}
}
