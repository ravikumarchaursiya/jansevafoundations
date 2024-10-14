import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  styleUrls: ['./back-to-top-button.component.scss']
})
export class BackToTopButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// Show/hide the button based on scroll position
showButton: boolean = false;

@HostListener('window:scroll', [])
onScroll(): void {
  // Show the button when the user scrolls down 100px or more
  this.showButton = window.scrollY > 100;
}

// Scroll to the top of the page when the button is clicked
scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
}

