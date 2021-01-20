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
    slidesOffsetBefore: 10
  };
  searchActive = false;
  searchResults = [];

  constructor(private api: ApiService) {}

  ionViewWillEnter(){
    this.api.getTrending().subscribe(res => {
      this.trending = res;
    })
  }

  searchChanged(e){
    const search = e.detail.value;
    console.log("SEARCH", e);

    if (search != ''){
      this.searchActive = true;
      this.api.getSearchResults(search).subscribe(res => {
        console.log('results: ', res);
        this.searchResults = res;
      })
    } else {
      this.searchActive = false;
      this.searchResults = [];
    }
  }

}
