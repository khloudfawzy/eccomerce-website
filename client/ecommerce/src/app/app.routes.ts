import { Routes } from '@angular/router';
export const routes: Routes = [
  // {
  //   //  registrationModule
  //   path: pagesConfig.config.landingPageModule.name,
  //   loadChildren: () => import('./document-landing-page/landing-page.module').then(m => m.LandingPageModule),
  // },
  {
    //  loginModule
    path: 'auth',
    loadComponent: () => import('./components/authentication/authentication.component').then(a => a.authenticationComponent),

  },
];
