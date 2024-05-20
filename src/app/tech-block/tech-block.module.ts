import { NgModule } from '@angular/core';
import {
  LibTbAlertModule,
  LibTbButtonModule,
  LibTbCardModule,
  LibTbStepperModule,
} from 'tech-block-lib';

@NgModule({
  exports: [
    LibTbButtonModule,
    LibTbStepperModule,
    LibTbAlertModule,
    LibTbCardModule,
  ],
})
export class TechBlockModule {}
