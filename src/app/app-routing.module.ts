import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
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
    loadChildren: () => import('./pages/topactors/topactors.module').then( m => m.TopactorsPageModule)
  },
  {
    path: 'topmovies',
    loadChildren: () => import('./pages/topmovies/topmovies.module').then( m => m.TopmoviesPageModule)
  },
  {
    path: 'toptvshows',
    loadChildren: () => import('./pages/toptvshows/toptvshows.module').then( m => m.ToptvshowsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
