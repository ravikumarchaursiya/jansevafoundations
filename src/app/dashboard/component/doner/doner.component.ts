import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doner',
  templateUrl: './doner.component.html',
  styleUrls: ['./doner.component.scss']
})
export class DonerComponent implements OnInit {
  donerForm: FormGroup;
  donersList: any[] = [];
 id:any
  constructor(private fb: FormBuilder) {
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
      this.donerForm.reset();
    }
  }

}
