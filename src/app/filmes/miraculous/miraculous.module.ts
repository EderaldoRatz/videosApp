import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiraculousPageRoutingModule } from './miraculous-routing.module';

import { MiraculousPage } from './miraculous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiraculousPageRoutingModule
  ],
  declarations: [MiraculousPage]
})
export class MiraculousPageModule {}
