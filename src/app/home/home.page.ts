import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  trending = [];
  opts = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10
  }

  constructor(private api: ApiService) {}

  ionViewWillEnter(){
    this.api.getTrending().subscribe(res => {
      this.trending = res;
    })
  }

}
