import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/website/Services/event.service';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.scss']
})
export class EventRegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder, private toastr:ToastrService,private event:EventService) {}
  registrationForm :FormGroup
  baseUrl = ''
  eventTypes = [
    { value: 'event1', label: 'Event 1' },
    { value: 'event2', label: 'Event 2' },
    { value: 'event3', label: 'Event 3' },
    { value: 'all', label: 'All package' }
  ];
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      ticketType: ['', Validators.required],
      event_type: ['', Validators.required],
     
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const postData =  this.registrationForm.getRawValue()
      this.event.EventRegisteration(this.baseUrl,postData).subscribe(res=>{
        if(res){
          this.toastr.success("Event Registered Successfully")
        }
      },error =>{
        this.toastr.error("Event Registration Failed")
      })
    } else {
      this.toastr.error("Form Is Invalid")
      this.registrationForm.markAllAsTouched();
    }
  }

}
