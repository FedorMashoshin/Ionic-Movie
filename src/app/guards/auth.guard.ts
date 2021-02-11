import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService, 
    private router: Router,
    private alertController: AlertController) { }
 
  canLoad(): Observable<boolean> {    
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map(isAuthenticated => {
        console.log("GUARD:", isAuthenticated)
        if (isAuthenticated) {          
          return true;
        } else {          
          this.presentAlert();
          return false;
        }
      })
    );
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'To see a Top Section you need to be logged in!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Log In',
          handler: () => {
            this.router.navigateByUrl('/login') 
          }
        }
      ]
    });

    await alert.present();
  }

}