import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss'],
})
export class ImageCropperComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  imageForExport: any = '';

  constructor() {}

  ngOnInit(): void {}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.imageForExport = event.base64;
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
    console.log('image loaded');
  }
  cropperReady() {
    // cropper ready
    console.log('cropper ready');
  }
  loadImageFailed() {
    // show message
    console.log('load image failed');
  }

  export(): void {
    console.log(this.imageForExport);
  }
}
