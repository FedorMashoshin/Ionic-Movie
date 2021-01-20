import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-topactors',
  templateUrl: './topactors.page.html',
  styleUrls: ['./topactors.page.scss'],
})
export class TopactorsPage implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPopularActors().subscribe(res => {
    console.log('Popular Actors:', res)
    })
  }

}
