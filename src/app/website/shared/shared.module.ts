import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BannerComponent } from '../pages/banner/banner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DynamicModule } from '../dynamic-component/dynamic.module';

@NgModule({
  declarations: [
    BannerComponent,
  
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DynamicModule
  ],
  exports: [BannerComponent,DynamicModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
