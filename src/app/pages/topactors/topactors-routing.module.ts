import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopactorsPage } from './topactors.page';

const routes: Routes = [
  {
    path: '',
    component: TopactorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopactorsPageRoutingModule {}
