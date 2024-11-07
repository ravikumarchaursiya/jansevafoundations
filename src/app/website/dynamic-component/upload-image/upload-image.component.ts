import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit, OnDestroy {
  @Input() maxFileSize: number = 2; // Max file size in MB
  @Input() allowedFileTypes: string[] = ['image/png', 'image/jpeg'];
  @Input() imageControl: FormControl;

  selectedFile: File | null = null;
  filePreviewUrl: any | null = null;
  fileError: string | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.imageControl) {
      // Ensure required validator is set if needed
      const validators = this.imageControl.validator
        ? [this.imageControl.validator, Validators.required]
        : [Validators.required];
      this.imageControl.setValidators(validators);
      this.imageControl.updateValueAndValidity();
    }
  }

  handleFileInput(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
      this.fileError = null;

      if (this.isValidFile(this.selectedFile)) {
        const objectURL = URL.createObjectURL(this.selectedFile);
        this.filePreviewUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL) as SafeUrl;
        this.imageControl.setValue(this.selectedFile); // Set the control's value
        this.imageControl.setErrors(null); // Clear errors if file is valid
      } else {
        this.clearFilePreview();
        this.imageControl.setErrors({ required: true }); // Set error if invalid file
      }
    } else {
      this.clearFilePreview();
    }
  }

  clearFilePreview(): void {
    this.filePreviewUrl = null;
    this.fileError = null;
    this.selectedFile = null;
    this.imageControl.setValue(null);  // Clear the form control value
    this.imageControl.markAsTouched(); // Mark as touched to trigger validation error
    this.imageControl.updateValueAndValidity(); // Ensure the validity is checked again
  }
  

  isValidFile(file: File): boolean {
    if (!this.allowedFileTypes.includes(file.type)) {
      this.fileError = `Invalid file type. Allowed types: ${this.allowedFileTypes.join(', ')}`;
      return false;
    }

    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > this.maxFileSize) {
      this.fileError = `File size exceeds the limit of ${this.maxFileSize} MB.`;
      return false;
    }
    return true;
  }

  ngOnDestroy(): void {
    if (this.filePreviewUrl) {
      URL.revokeObjectURL(this.filePreviewUrl);
    }
  }
}
