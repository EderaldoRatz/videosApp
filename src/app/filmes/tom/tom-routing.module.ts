import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomPage } from './tom.page';

const routes: Routes = [
  {
    path: '',
    component: TomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomPageRoutingModule {}
