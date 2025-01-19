import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m=> m.HomeModule)},
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  //  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  //  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
