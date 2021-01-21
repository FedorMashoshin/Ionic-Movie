import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

import Vibrant from 'node-vibrant';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.page.html',
  styleUrls: ['./actor.page.scss'],
})
export class ActorPage implements OnInit {
  bio = null;
  acting = [];
  mainColor = '#e4e4e4';
  profileImg = null;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.api.getActorDetails(id).subscribe(res => {
      console.log('actor:', res);
      this.bio = res;
      this.profileImg = `${environment.images}/w200/${this.bio.profile_path}`;
    });
    this.api.getActorCreditList(id).subscribe(res => {
      this.acting = res;
      console.log('credits:', res);
    })
}
}
