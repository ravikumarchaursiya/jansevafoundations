import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BannerComponent } from '../pages/banner/banner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DynamicModule } from '../dynamic-component/dynamic.module';
import { CharSpaceOnlyDirective } from 'src/app/directives/charspaceonly.directive';
import { DecimalDirective } from 'src/app/directives/decimal.directive';
import { EmailValidatorDirective } from 'src/app/directives/emailvalidator.directive';
import { NumericOnlyDirective } from 'src/app/directives/numeric-only.directive';

@NgModule({
  declarations: [
    BannerComponent,
    CharSpaceOnlyDirective,
    DecimalDirective,
    EmailValidatorDirective,
    NumericOnlyDirective

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DynamicModule,
    
  ],
  exports: [BannerComponent,DynamicModule,CharSpaceOnlyDirective,DecimalDirective,EmailValidatorDirective,NumericOnlyDirective],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
