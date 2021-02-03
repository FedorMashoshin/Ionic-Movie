import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();  
  }

  pages =   
  [  
      { 
      title : 'Top Actors',
      url   : '/topactors',
      icon  : 'people-outline' 
      },
    { 
      title : 'Top Movies',  
      url   : '/topmovies',  
      icon  : 'videocam-outline'  
    },   
    {  
      title : 'Top TV Shows',  
      url   : '/toptvshows',  
      icon  : 'tv-outline'   
    },
    {  
      title : 'Home Page',  
      url   : '/',  
      icon  : 'home-outline'   
    }
  ];

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
