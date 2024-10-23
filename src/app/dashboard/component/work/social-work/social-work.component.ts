import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-social-work',
  templateUrl: './social-work.component.html',
  styleUrls: ['./social-work.component.scss']
})
export class SocialWorkComponent implements OnInit {

  socialWorkForm: FormGroup;
  membersList: any[] = [];
 id:any
 isEditable:boolean = false
  constructor(private fb: FormBuilder,private location:Location) {
    this.socialWorkForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
ngOnInit(): void {
    
}
  onSubmit() {
    if (this.socialWorkForm.valid) {
      this.membersList.push(this.socialWorkForm.value);
      this.socialWorkForm.reset();
    }
  }
  editForm(){
    this.isEditable = true
  }
  back(){
    this.location.back()
  }
}
