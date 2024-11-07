import { Component, EventEmitter, Input, Output, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit, OnDestroy {
  // @Input() maxWidth: number = 319; // Default max width
  // @Input() maxHeight: number = 317; // Default max height
  @Input() maxFileSize: number = 2; // Max file size in MB
  @Input() allowedFileTypes: string[] = ['image/png', 'image/jpeg']; // Allowed file types

  @Output() imageSelected = new EventEmitter<File | null>();

  selectedFile: File | null = null;
  filePreviewUrl: any | null = null;
  fileError: string | null = null;

  ngOnInit(): void {}
  constructor(private sanitizer: DomSanitizer) { }
  handleFileInput(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
      this.fileError = null;
  
      if (this.isValidFile(this.selectedFile)) {
        const objectURL = URL.createObjectURL(this.selectedFile);
        this.filePreviewUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL) as SafeUrl;
        this.imageSelected.emit(this.selectedFile);
      } else {
        this.imageSelected.emit(null);
      }
    } else {
      this.fileError = 'No file selected';
      this.imageSelected.emit(null);
    }
  }
  
  clearFilePreview() {
    this.filePreviewUrl = null;  // Clears the image preview
    this.fileError = null;       // Optionally clear the error message
  }

  isValidFile(file: File): boolean {
    // Validate file type
    if (!this.allowedFileTypes.includes(file.type)) {
      this.fileError = `Invalid file type. Allowed types: ${this.allowedFileTypes.join(', ')}`;
      return false;
    }

    // Validate file size
    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > this.maxFileSize) {
      this.fileError = `File size exceeds the limit of ${this.maxFileSize} MB.`;
      return false;
    }

    // Validate image dimensions
    // const img = new Image();
    // img.onload = () => {
    //   if (img.width > this.maxWidth || img.height > this.maxHeight) {
    //     this.fileError = `Image dimensions exceed the maximum allowed size of ${this.maxWidth}x${this.maxHeight} pixels.`;
    //     this.imageSelected.emit(null); // Emit null if dimensions are invalid
    //   }
    // };
    // img.src = URL.createObjectURL(file);

    return true;
  }

  ngOnDestroy(): void {
    if (this.filePreviewUrl) {
      URL.revokeObjectURL(this.filePreviewUrl); // Clean up preview URL
    }
  }
}
