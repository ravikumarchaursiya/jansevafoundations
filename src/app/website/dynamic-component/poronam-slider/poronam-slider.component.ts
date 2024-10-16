import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-poronam-slider',
  templateUrl: './poronam-slider.component.html',
  styleUrls: ['./poronam-slider.component.scss'],
 
})
export class PoronamSliderComponent implements OnInit {
 
  constructor() {   
   }

  ngOnInit(): void {

    const photos = Array.from(document.getElementsByClassName("photo"));
    const photoWrapper = document.getElementById("photoWrapper");
    
    let count = 0;
    photos.forEach((photo) => {
        count++;
        if (count % 2) {
            photo.classList.add("even");
        }
    });
    
    photoWrapper.addEventListener("scroll", () => {
        photos.forEach(checkPosition);
    });
    
    function checkPosition(photo) {
        if (photo.getBoundingClientRect().right - 4 <= 0) {
            photo.remove();
            photoWrapper.append(photo);
            photoWrapper.scrollLeft = 0;
            return;
        }
    }
    
    function infiniteScroll() {
        photoWrapper.scrollLeft++;
        requestAnimationFrame(infiniteScroll);
    }
    
    infiniteScroll();
    
      
  }


}
