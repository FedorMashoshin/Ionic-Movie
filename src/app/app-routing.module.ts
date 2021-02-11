import { IntroGuard } from './guards/intro.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [IntroGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'actor/:id',
    loadChildren: () => import('./pages/actor/actor.module').then( m => m.ActorPageModule)
  },
  {
    path: ':type/:id',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'topactors',
    loadChildren: () => import('./pages/topactors/topactors.module').then( m => m.TopactorsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'topmovies',
    loadChildren: () => import('./pages/topmovies/topmovies.module').then( m => m.TopmoviesPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'toptvshows',
    loadChildren: () => import('./pages/toptvshows/toptvshows.module').then( m => m.ToptvshowsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
