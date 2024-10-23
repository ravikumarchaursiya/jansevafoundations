import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employment-work',
  templateUrl: './employment-work.component.html',
  styleUrls: ['./employment-work.component.scss']
})
export class EmploymentWorkComponent implements OnInit {

  employmentWorkForm: FormGroup;
  membersList: any[] = [];
 id:any
  constructor(private fb: FormBuilder) {
    this.employmentWorkForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
ngOnInit(): void {
    
}
  onSubmit() {
    if (this.employmentWorkForm.valid) {
      this.membersList.push(this.employmentWorkForm.value);
      this.employmentWorkForm.reset();
    }
  }


}
