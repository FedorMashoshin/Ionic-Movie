import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActorPageRoutingModule } from './actor-routing.module';

import { ActorPage } from './actor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActorPageRoutingModule
  ],
  declarations: [ActorPage]
})
export class ActorPageModule {}
