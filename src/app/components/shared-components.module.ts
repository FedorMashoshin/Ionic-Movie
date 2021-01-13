import { MoviePreviewComponent } from './movie-preview/movie-preview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MoviePreviewComponent],
  imports: [
    CommonModule
  ],
  exports:[MoviePreviewComponent]
})
export class SharedComponentsModule { }
