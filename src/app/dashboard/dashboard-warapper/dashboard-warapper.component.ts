import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-warapper',
  templateUrl: './dashboard-warapper.component.html',
  styleUrls: ['./dashboard-warapper.component.scss']
})
export class DashboardWarapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  childValue: boolean;

  handleValueChange(value: boolean) {
    this.childValue = value;
    console.log(value)
  }
}
