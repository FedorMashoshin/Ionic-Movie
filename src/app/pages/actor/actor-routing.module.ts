import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorPage } from './actor.page';

const routes: Routes = [
  {
    path: '',
    component: ActorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorPageRoutingModule {}
