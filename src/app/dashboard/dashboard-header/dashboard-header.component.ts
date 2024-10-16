import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  isToggled: boolean = false;
  userName:any
  role
  @Output() valueChange = new EventEmitter<boolean>();
  constructor(){}
  ngOnInit(): void {
     
  //   this.userName = this.utility.getUsreNameRole()
  //   this.role =  this.utility.getUsreNameRole()
  }

  toggleAndSendValue() {
    this.isToggled = !this.isToggled;
    this.valueChange.emit(this.isToggled);
  }

  logOut(){
    // this.auth.logout()
  }

}
