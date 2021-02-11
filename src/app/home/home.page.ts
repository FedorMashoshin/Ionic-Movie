import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
const TOKEN_KEY = 'my-token';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  trending = [];
  upcoming = [];
  opts = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    slidesOffsetBefore: 10
  };
  searchActive = false;
  searchResults = [];
  isLogged: boolean;

  constructor(
    private authService: AuthenticationService, 
    private router: Router,
    private api: ApiService) {}

  async ionViewWillEnter(){
    this.api.getTrending().subscribe(res => {
      this.trending = res;
    })

    this.api.getNowadaysMovies().subscribe(res => {
      this.upcoming = res;
    })

    const token = await Storage.get({ key: TOKEN_KEY });
    // console.log(token)
    token.value? this.isLogged = true : this.isLogged = false
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

  doRefresh(e){
    this.api.getTrending().subscribe(res => {
      this.trending = res;
    }); 
    this.api.getNowadaysMovies().subscribe(res => {
      this.upcoming = res;
    });
    setTimeout(() => {
      e.target.complete();
    }, 2000)
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  login(){
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

}
