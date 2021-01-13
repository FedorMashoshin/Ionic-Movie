import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss'],
})
export class MoviePreviewComponent implements OnInit {
  @Input('movie') movie: any;
  imageUrl = '';
  constructor() { }

  ngOnInit() {
    this.imageUrl = `${environment.images}/w200${this.movie.poster_path}`
  }
}
