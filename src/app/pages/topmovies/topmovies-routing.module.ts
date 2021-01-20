import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopmoviesPage } from './topmovies.page';

const routes: Routes = [
  {
    path: '',
    component: TopmoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopmoviesPageRoutingModule {}
