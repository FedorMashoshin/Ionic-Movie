import { element } from 'protractor';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

import Vibrant from 'node-vibrant';

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
  mainColor = '#fff';
  cast = [];

  opts = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    slidesOffsetBefore: 10,
  }


  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private elementRef: ElementRef) { }

  ngOnInit() { 
    const id = this.route.snapshot.paramMap.get('id');
    const type = this.route.snapshot.paramMap.get('type');

    this.api.getMovieDetails(id, type).subscribe(res => {
      console.log(res);
      this.movie = res;
      
      if(this.movie.poster_path) {
        this.imageUrl = `${environment.images}/w400/${this.movie.poster_path}`;
        this.getDominantColor();
      }
    })

    this.api.getMovieCast(id, type).subscribe(res => {
      console.log(res)
      this.cast = res;
    })
  }
  getDominantColor(){
    Vibrant.from(`${environment.images}/w400/${this.movie.poster_path}`).getPalette((err, palette) => {
      this.mainColor = palette.Vibrant.getHex();
      this.elementRef.nativeElement.style.setProperty('--main',  this.mainColor);
    })
  }
}
