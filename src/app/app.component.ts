import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TechBlockModule } from './tech-block/tech-block.module';
import {
  ILibTbAlert,
  ILibTbButton,
  ILibTbCard,
  ILibTbSlider,
  ILibTbStepper,
  LibTbAlertService,
} from 'tech-block-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TechBlockModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private alertService: LibTbAlertService) {}

  title = 'angular-17-techblock';

  // Atomos
  customBtn: ILibTbButton = {
    label: 'Disparar alertas',
    icon: 'fa-sharp fa-thin fa-magnifying-glass',
    iconPosition: 'left',
    class: 'mx-2',

    libTbClick: () => this.showAlerts(),
  };

  customAlert: ILibTbAlert = {
    key: 'alert',
    position: 'top-right',
    libTbOnClose: (e) => {
      console.log('Se cerró la alerta', e);
    },
  };
  showAlerts(): void {
    console.log("alertas")
    this.alertService.addAll([
      {
        key: 'alert',
        type: 'success',
        title: 'Correcto',
        description: 'Message Content',
      },
      {
        key: 'alert',
        type: 'info',
        title: 'Información',
        description: 'Message Content',
        sticky: true,
      },
      {
        key: 'alert',
        type: 'warning',
        title: 'Advertencia',
        description: 'Message Content',
        sticky: true,
      },
      {
        key: 'alert',
        type: 'error',
        title: 'Error',
        description: 'Message Content',
        sticky: true,
      },
    ]);
  }

  customSlider: ILibTbSlider = {
    label: 'Label text',
    animate: true,
    // disabled: true,
     min: 1,
     max: 30,
    range: false,
    // ariaLabelledBy: 'Aria label',
    // step: 10,
    // tabindex: 0,
    // class: 'custom__class',
    libTbChange: e => {
      console.log('libTbChange', e);
    },
    libTbSlideEnd: e => {
      console.log('libTbSlideEnd', e);
    },
    name: 'daysDiscount',


    floatValues: false,
  }
  



  customCard: ILibTbCard = {
    
    orientation: 'horizontal',
    img: {
      src: 'https://mussica.info/wp-content/uploads/2021/03/juan-pablo-machado-profesional-work-chilledcow-1.jpeg',
    },
    tagHeader: {
      label: 'Tag',
      icon: 'fa fa-heart',
      rounded: true,
    },
    buttonHeader: {
      icon: 'fa fa-heart',
      class: 'btn-card-cc',
      libTbClick: e => {
        console.log(e);
      },
    },
    title: 'Title H6',
    subtitle: 'Subtitle',
    description: 'Texto de la descripción',
    observation: 'Observation',
    boxItems: [
      {
        icon: 'fa fa-heart',
        text: 'Corazón',
      },
      {
        icon: 'fa fa-arrow-up',
        text: 'Arriba',
      },
      {
        icon: 'fa fa-left',
        text: 'Iquierda',
      },
      {
        icon: 'fa fa-users',
        text: 'Amigos',
      },
    ],
  };

  
  

  // Moleculas
  customStepper: ILibTbStepper = {
    activeIndex: 0,
    readonly: false,
    // style: {'witdh':'100%'},
    class: 'stepper-jelpit',

    type: 'number',
    items: [
      {
        label: 'Step 1',
        icon: 'fa fa-times',
        command: (): void => {
          console.log('click');
          this.customStepper.activeIndex = 0;
        },
      },
      {
        disabled: false,
        label: 'Step 2',
        icon: 'fa fa-user',
        command: (): void => {
          console.log('click');
          this.customStepper.activeIndex = 1;
        },
      },
      {
        label: 'Step 3',
        icon: 'fa fa-user',
        command: (): void => {
          console.log('click');
          this.customStepper.activeIndex = 2;
        },
        styleClass: 'view',
      },
    ],
  };
}
