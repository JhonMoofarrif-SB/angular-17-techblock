import { NgModule } from '@angular/core';
import {
  LibTbAlertModule,
  LibTbButtonModule,
  LibTbCardModule,
  LibTbSliderModule,
  LibTbStepperModule,
} from 'tech-block-lib';

@NgModule({
  exports: [
    LibTbButtonModule,
    LibTbStepperModule,
    LibTbAlertModule,
    LibTbCardModule,
    LibTbSliderModule,
  ],
})
export class TechBlockModule {}
