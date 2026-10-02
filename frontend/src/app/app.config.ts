import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { providePrimeNG } from 'primeng/config';
import DarkBluePreset from './theme/dark-blue-preset';
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }),
      withViewTransitions()
    ),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch()
    ),
    provideClientHydration(
      withEventReplay()
    ),
    providePrimeNG({
      license: 'eyJpZCI6ImUzY2Q4MzA0LWI1MDAtNDQwNS05ZGNkLWU4YzgxYTZjMDc4ZSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODYwMDgwNDgsImV4cCI6MTgxNzU0NDA0OH0.UwbNGxhtOzbTroVWR81Ur8B0mr5I1A6tarx_SMNsAIYbJ41SBRGZ0CHPBbdMdctoevGBi9yXBcVhScCXVbxsAw',
      ripple: true,
      theme: {
        preset: DarkBluePreset,
        options: {
          darkModeSelector: '.app-dark'
        }
      }
    }),

      provideTranslateService({
          loader: provideTranslateHttpLoader({
          prefix: './assets/i18n/',
          suffix: '.json'
        }),
        fallbackLang: 'fr',
        lang: 'fr'
      })
  ]
};