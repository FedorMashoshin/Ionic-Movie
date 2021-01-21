import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopmoviesPageRoutingModule } from './topmovies-routing.module';

import { TopmoviesPage } from './topmovies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopmoviesPageRoutingModule
  ],
  declarations: [TopmoviesPage]
})
export class TopmoviesPageModule {}
