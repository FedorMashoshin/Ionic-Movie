import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-toptvshows',
  templateUrl: './toptvshows.page.html',
  styleUrls: ['./toptvshows.page.scss'],
})
export class ToptvshowsPage implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPopularShows().subscribe(res => {
      console.log('Top Shows:', res)
    })
  }

}
