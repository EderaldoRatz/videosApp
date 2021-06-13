import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomPageRoutingModule } from './tom-routing.module';

import { TomPage } from './tom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomPageRoutingModule
  ],
  declarations: [TomPage]
})
export class TomPageModule {}
