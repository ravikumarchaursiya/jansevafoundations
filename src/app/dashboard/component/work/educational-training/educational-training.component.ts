import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-educational-training',
  templateUrl: './educational-training.component.html',
  styleUrls: ['./educational-training.component.scss']
})
export class EducationalTrainingComponent  {

  educationalForm: FormGroup;
  membersList: any[] = [];
 id:any
 isEditable:boolean = false
  constructor(private fb: FormBuilder,private location:Location) {
    this.educationalForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
ngOnInit(): void {
    
}
  onSubmit() {
    if (this.educationalForm.valid) {
      this.membersList.push(this.educationalForm.value);
      this.educationalForm.reset();
    }
  }
  editForm(){
    this.isEditable = true
  }
  back(){
    this.location.back()
  }

}
