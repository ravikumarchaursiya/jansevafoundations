import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../Services/gallery.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent  {
url ='http://localhost:1337'
// urlEndPoint = '/gallery?populate=deep'
// galleryImage: any[]; // Assuming your galleryImage is an array of objects containing image attributes and categories
// filteredImages: any[]; 
//   constructor(private gallery:GalleryService) { 
//     console.log(this.url)
//   }

//   ngOnInit(): void {
//    this.getGalleryImage()
//   }
//   getGalleryImage(){
//       this.gallery.getGalleryImage(this.urlEndPoint).subscribe(res=>{
//        if(res.data.attributes.Gallery[0].GalleryImage.data){
//          this.galleryImage = res.data.attributes.Gallery[0].GalleryImage.data
//         console.log(this.galleryImage);
//        }
//       })

// }
}
