import { IonicModule } from '@ionic/angular';
import { CastComponent } from './cast/cast.component';
import { RouterModule } from '@angular/router';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MoviePreviewComponent, CastComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports:[MoviePreviewComponent, CastComponent]
})
export class SharedComponentsModule { }
