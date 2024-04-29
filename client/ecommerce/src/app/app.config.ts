import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(
    NgxSmartModalModule.forRoot(),
    HttpClientModule,
  ),
]
};
