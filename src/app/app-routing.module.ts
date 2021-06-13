import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'raya',
    loadChildren: () => import('./filmes/raya/raya.module').then( m => m.RayaPageModule)
  },
  {
    path: 'miraculous',
    loadChildren: () => import('./filmes/miraculous/miraculous.module').then( m => m.MiraculousPageModule)
  },
  {
    path: 'tom',
    loadChildren: () => import('./filmes/tom/tom.module').then( m => m.TomPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
