import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopactorsPageRoutingModule } from './topactors-routing.module';

import { TopactorsPage } from './topactors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopactorsPageRoutingModule
  ],
  declarations: [TopactorsPage]
})
export class TopactorsPageModule {}
