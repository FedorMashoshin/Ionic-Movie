import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToptvshowsPage } from './toptvshows.page';

const routes: Routes = [
  {
    path: '',
    component: ToptvshowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToptvshowsPageRoutingModule {}
