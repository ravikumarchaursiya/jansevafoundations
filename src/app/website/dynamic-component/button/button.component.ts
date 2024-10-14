import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  isActive: boolean = false;
  toggleActiveState() {
    this.isActive = !this.isActive;
  }
  constructor() { }

  ngOnInit(): void {}

}
