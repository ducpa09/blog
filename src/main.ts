
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { BACKEND_URL } from 'environment';
import { API_URL } from './app/api-token';


bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: API_URL, useValue: BACKEND_URL
    },
    appConfig.providers],
})
.catch((err) => console.error(err));