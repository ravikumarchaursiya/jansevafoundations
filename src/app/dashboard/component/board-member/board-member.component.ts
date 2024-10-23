import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-board-member',
  templateUrl: './board-member.component.html',
  styleUrls: ['./board-member.component.scss']
})
export class BoardMemberComponent  {

  boardMemberForm: FormGroup;
  membersList: any[] = [];
  isEditable:boolean = false
 id:any
  constructor(private fb: FormBuilder,private Tostr:ToastrService,private router:Router,private location:Location) {
    this.boardMemberForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
ngOnInit(): void {
    
}
  onSubmit() {
    if (this.boardMemberForm.valid) {
      this.membersList.push(this.boardMemberForm.value);
      this.Tostr.success("Board Member Added Successfully")
      // this.boardMemberForm.reset();
    }
  }
  editForm(){
    this.isEditable = true
  }
  back(){
    this.location.back()
  }

}
