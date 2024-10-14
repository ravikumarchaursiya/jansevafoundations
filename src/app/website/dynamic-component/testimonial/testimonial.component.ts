import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],

})
export class TestimonialComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const carousel = document.getElementById("testimonial4");
      const interval = 4000; // Change interval to your desired value (in milliseconds)

      function slide() {
        const activeItem = carousel.querySelector(".carousel-inner .item.active");
        const nextItem = activeItem.nextElementSibling || carousel.querySelector(".carousel-inner .item:first-child");
        activeItem.classList.remove("active");
        nextItem.classList.add("active");
      }

      setInterval(slide, interval);
    });
  }





}
