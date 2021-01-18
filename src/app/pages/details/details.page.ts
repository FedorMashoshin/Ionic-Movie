import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  movie = null;
  background = null;
  imageUrl = null;
  runtime = null;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const type = this.route.snapshot.paramMap.get('type');
    this.api.getMovieDetails(id, type).subscribe(res => {
      console.log(res);
      this.movie = res;
      this.runtime = `${res.runtime / 60 ^ 0}h. ` + res.runtime % 60 + ' min. ';

      if(this.movie.backdrop_path) {
        this.background = `${environment.images}/w400/${this.movie.backdrop_path}`;
      }
      if(this.movie.poster_path) {
        this.imageUrl = `${environment.images}/w400/${this.movie.poster_path}`;
      }
    })
  }


}
