import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-educational-event',
  templateUrl: './educational-event.component.html',
  styleUrls: ['./educational-event.component.scss']
})
export class EducationalEventComponent  {
  boardMemberForm: FormGroup;
  membersList: any[] = [];
 id:any
  constructor(private fb: FormBuilder) {
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
      this.boardMemberForm.reset();
    }
  }

}
