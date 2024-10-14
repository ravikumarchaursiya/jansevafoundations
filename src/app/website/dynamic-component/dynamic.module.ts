import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { LabelComponent } from './label/label.component';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { IconComponent } from './icon/icon.component';
import { StickyBarComponent } from './sticky-bar/sticky-bar.component';
import { BackToTopButtonComponent } from './back-to-top-button/back-to-top-button.component';
import { SliderComponent } from './slider/slider.component';
import { PoronamSliderComponent } from './poronam-slider/poronam-slider.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { InfoComponent } from './info/info.component';
import { MarqueeSliderComponent } from './marquee-slider/marquee-slider.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    DropdownComponent,
    TextAreaComponent,
    MaterialTableComponent,
    DatepickerComponent,
    LabelComponent,
    RadioComponent,
    CheckboxComponent,
    IconComponent,
    StickyBarComponent,
    BackToTopButtonComponent,
    SliderComponent,
    PoronamSliderComponent,
    TestimonialComponent,
    UpcomingEventsComponent,
    InfoComponent,
    MarqueeSliderComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
   
  ],
  exports:[InputComponent,
    ButtonComponent,
    DropdownComponent,
    TextAreaComponent,
    MaterialTableComponent,
    DatepickerComponent,
    LabelComponent,
    RadioComponent,
    CheckboxComponent,
    IconComponent,
    StickyBarComponent,
    BackToTopButtonComponent,SliderComponent,PoronamSliderComponent,
    TestimonialComponent,InfoComponent,MarqueeSliderComponent,MaterialModule,ReactiveFormsModule],
   schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DynamicModule { }
