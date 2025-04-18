import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';


import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
      provideClientHydration(),
      BrowserModule,
      BrowserAnimationsModule,
      provideAnimations()
  ]
};
