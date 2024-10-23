import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-social-cultural-work',
  templateUrl: './social-cultural-work.component.html',
  styleUrls: ['./social-cultural-work.component.scss']
})
export class SocialCulturalWorkComponent implements OnInit {

  socialCulturalForm: FormGroup;
  membersList: any[] = [];
 id:any
  constructor(private fb: FormBuilder) {
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

}
