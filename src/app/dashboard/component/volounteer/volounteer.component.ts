import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private fb: FormBuilder,private toast:ToastrService,private location:Location) {
    this.volounteerForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
ngOnInit(): void {
    
}
  onSubmit() {
    if (this.volounteerForm.valid) {
      this.membersList.push(this.volounteerForm.value);
      this.toast.success("Volounteer Added Successfully")
      // this.volounteerForm.reset();
    }
  }
  editForm(){
    this.isEditable = true
  }
  back(){
    this.location.back()
  }
}
