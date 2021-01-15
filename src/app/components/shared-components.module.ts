import { RouterModule } from '@angular/router';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MoviePreviewComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[MoviePreviewComponent]
})
export class SharedComponentsModule { }
