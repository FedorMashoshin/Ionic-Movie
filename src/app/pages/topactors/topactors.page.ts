import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-topactors',
  templateUrl: './topactors.page.html',
  styleUrls: ['./topactors.page.scss'],
})
export class TopactorsPage implements OnInit {
  // @Input('actor') actor: any;
  popularActors = [];
  imageUrl = 'http://image.tmdb.org/t/p/w200';

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getPopularActors().subscribe(res => {
    console.log('Popular Actors:', res);
    this.popularActors = res;
    })
  }

  doRefresh(e){
    this.api.getPopularActors().subscribe(res => {
      console.log('Popular Actors:', res);
      this.popularActors = res;
    }); 
    setTimeout(() => {
      e.target.complete();
    }, 2000)
  }

}
