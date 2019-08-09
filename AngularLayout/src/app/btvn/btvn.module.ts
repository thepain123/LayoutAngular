import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BTVNComponent } from './btvn.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';

import { SmartphoneComponent } from './smartphone/smartphone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ItemComponent } from './item/item.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [BTVNComponent, HeaderComponent, CarouselComponent,  SmartphoneComponent, LaptopComponent, ItemComponent, FooterComponent],
  exports : [BTVNComponent, HeaderComponent, CarouselComponent,  SmartphoneComponent, LaptopComponent, ItemComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class BTVNModule { }
