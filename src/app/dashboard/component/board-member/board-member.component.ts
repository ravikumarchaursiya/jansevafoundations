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
      uploadImage: [null, Validators.required],
      description: new FormControl('')
    });
  }
  get descriptionControl(): FormControl {
    return this.myForm.get('description') as FormControl;
  }
  onImageSelected(file: File | null): void {
    this.myForm.get('uploadImage')?.setValue(file); // Set the form control value
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      const postData =  this.myForm.getRawValue()
      this.dservice.addBoardMember(this.baseUrl,postData).subscribe(res=>{
        if(res){
          this.toastr.success('Form Submitted Successfully');
          console.log('Form Value:', this.myForm.value);
        }
      })
      this.toastr.success('Form Submitted Successfully');
      console.log('Form Value:', this.myForm.value);
    } else {
      this.toastr.error('Form Is Invalid');
      this.myForm.updateValueAndValidity();
    }
  }
  back(){
    this.utility.back()
  }
}
