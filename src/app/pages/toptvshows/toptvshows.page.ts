import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-toptvshows',
  templateUrl: './toptvshows.page.html',
  styleUrls: ['./toptvshows.page.scss'],
})
export class ToptvshowsPage implements OnInit {
  topShows = [];
  imageUrl = 'http://image.tmdb.org/t/p/w200';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPopularShows().subscribe(res => {
      console.log('Top Shows:', res);
      this.topShows = res;
    })
  }

  doRefresh(e){
    this.api.getPopularShows().subscribe(res => {
      console.log('Top Shows:', res);
      this.topShows = res;
    }); 
    setTimeout(() => {
      e.target.complete();
    }, 2000)
  }

}
