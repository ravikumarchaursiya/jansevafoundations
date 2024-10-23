import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-skill-devlopment',
  templateUrl: './skill-devlopment.component.html',
  styleUrls: ['./skill-devlopment.component.scss']
})
export class SkillDevlopmentComponent implements OnInit {
  skillDevlopmentForm: FormGroup;
  membersList: any[] = [];
 id:any
 isEditable:boolean = false
  constructor(private fb: FormBuilder,private location:Location){
    this.skillDevlopmentForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
ngOnInit(): void {
    
}
  onSubmit() {
    if (this.skillDevlopmentForm.valid) {
      this.membersList.push(this.skillDevlopmentForm.value);
      this.skillDevlopmentForm.reset();
    }
  }
  editForm(){
    this.isEditable = true
  }
  back(){
    this.location.back()
  }
}
