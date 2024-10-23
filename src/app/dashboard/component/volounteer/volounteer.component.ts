import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-volounteer',
  templateUrl: './volounteer.component.html',
  styleUrls: ['./volounteer.component.scss']
})
export class VolounteerComponent  {

  volounteerForm: FormGroup;
  membersList: any[] = [];
 id:any
  constructor(private fb: FormBuilder) {
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
      this.volounteerForm.reset();
    }
  }

}
