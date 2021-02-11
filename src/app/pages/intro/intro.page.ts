import { Component, OnInit } from '@angular/core';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
const { Storage }  = Plugins;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async start(){
    await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/login', {replaceUrl:true});
  }

  async guest(){
    await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/', {replaceUrl:true})
  }

}
