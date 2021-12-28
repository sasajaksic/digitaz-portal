import { PromotionDetalComponent } from './promotions/promotion-detal/promotion-detal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropperComponent } from './promotions/image-cropper/image-cropper.component';
import { SocialsComponent } from './socials/socials.component';

@NgModule({
  declarations: [AppComponent, PromotionDetalComponent, ImageCropperComponent, SocialsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      positionClass: 'toast-top-center',
    }),
    ReactiveFormsModule,
    ImageCropperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
