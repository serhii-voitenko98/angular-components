import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full',
  },
  {
    path: 'components',
    loadChildren: () => import('./components/component-documentation/component-documentation.module')
      .then(m => m.ComponentDocumentationModule),
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives-documentation/directives-documentation.module')
      .then(m => m.DirectivesDocumentationModule),
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services-documentation/services-documentation.module')
      .then(m => m.ServicesDocumentationModule),
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes-documentation/pipes-documentation.module')
      .then(m => m.PipesDocumentationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
