import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    //  Authuntication
    path: 'auth',
    loadComponent: () => import('./components/authentication/authentication.component').then(a => a.authenticationComponent),
    children:[
      {
        //  Authuntication
        path: 'confirmation',
        loadComponent: () => import('./components/authentication/confirmation-page/confirmation-page.component').then(a => a.ConfirmationPageComponent),
      },
    ]
  },
  // {
  //   path: '**',
  //   loadComponent: () => import('./page-not-found/page-not-found.component')
  //     .then(mod => mod.PageNotFoundComponent)
  // }
];
