import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UtilityService } from 'src/app/common/utility.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamMember: FormGroup;
  membersList: any[] = [];
 id:any
 isEditable:boolean = false
 baseUrl = '/'
 constructor(private fb: FormBuilder,private toastr:ToastrService,private location:Location,private utility:UtilityService,private dservice:DashboardService) {
    this.teamMember = this.fb.group({
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
  return this.teamMember.get('description') as FormControl;
}
get profileImageControl(): FormControl {
  return this.teamMember.get('profileImage') as FormControl;
}
get emailControl(): FormControl {
  return this.teamMember.get('email') as FormControl;
}
get phoneControl(): FormControl {
  return this.teamMember.get('phone') as FormControl;
}
onSubmit(): void {
  if (this.teamMember.valid) {
    debugger;
    // Create FormData to handle file and other form data
    const formData = new FormData();

    // Loop through the form controls
    Object.keys(this.teamMember.controls).forEach(controlName => {
      const control = this.teamMember.get(controlName);

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
    this.dservice.addTeamMember(this.baseUrl, formData).subscribe(res => {
      if (res) {
        this.toastr.success('Form Submitted Successfully');
        console.log('Form Value:', formData); // Log the FormData if necessary
      }
    });
  } else {
    this.toastr.error('Form Is Invalid');
    this.teamMember.markAllAsTouched();
  }
}

back(){
  this.utility.back()
}

}
