import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.component.html',
  styleUrls: ['./copy-right.component.scss']
})
export class CopyRightComponent implements OnInit {
  currentYear: number
  constructor() {
    this.currentYear = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
