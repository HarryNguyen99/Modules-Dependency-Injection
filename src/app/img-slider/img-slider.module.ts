import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSlideComponent } from './img-slide/img-slide.component';
import {ImgSliderComponent} from './img-slider.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImgSlideComponent, ImgSliderComponent],
  exports: [ImgSliderComponent, ImgSlideComponent]
})
export class ImgSliderModule { }
