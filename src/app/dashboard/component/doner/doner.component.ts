import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private fb: FormBuilder,private toast:ToastrService,private location:Location) {
    this.donerForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
ngOnInit(): void {
    
}
  onSubmit() {
    if (this.donerForm.valid) {
      this.donersList.push(this.donerForm.value);
      this.toast.success("Doner Added Successfully")
      this.donerForm.reset();
    }
  }
  editForm(){
    this.isEditable = true
  }
  back(){
    this.location.back()
  }
}
