import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-topmovies',
  templateUrl: './topmovies.page.html',
  styleUrls: ['./topmovies.page.scss'],
})
export class TopmoviesPage implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPopularMovies().subscribe(res => {
      console.log('Top Movies:', res)
    })
  }

}
