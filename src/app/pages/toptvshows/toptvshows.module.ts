import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToptvshowsPageRoutingModule } from './toptvshows-routing.module';

import { ToptvshowsPage } from './toptvshows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToptvshowsPageRoutingModule
  ],
  declarations: [ToptvshowsPage]
})
export class ToptvshowsPageModule {}
