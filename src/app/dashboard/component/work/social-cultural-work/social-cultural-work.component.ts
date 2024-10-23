import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-social-cultural-work',
  templateUrl: './social-cultural-work.component.html',
  styleUrls: ['./social-cultural-work.component.scss']
})
export class SocialCulturalWorkComponent implements OnInit {

  socialCulturalForm: FormGroup;
  membersList: any[] = [];
 id:any
 isEditable:boolean = false
  constructor(private fb: FormBuilder,private location:Location) {
    this.socialCulturalForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
ngOnInit(): void {
    
}
  onSubmit() {
    if (this.socialCulturalForm.valid) {
      this.membersList.push(this.socialCulturalForm.value);
      this.socialCulturalForm.reset();
    }
  }
  editForm(){
    this.isEditable = true
  }
  back(){
    this.location.back()
  }
}
