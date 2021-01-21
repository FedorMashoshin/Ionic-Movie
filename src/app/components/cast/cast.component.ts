import { Component, Input, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
})
export class CastComponent implements OnInit {
  @Input('actor') actor: any;
  imageUrl = '';

  constructor() { }

  ngOnInit() {
    this.imageUrl = `${environment.images}/w200${this.actor.profile_path}`
    console.log('IMAGE', this.imageUrl)
  }

}
