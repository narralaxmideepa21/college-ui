import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app/app.routes';



bootstrapApplication(App, {
  providers:[
    importProvidersFrom(RouterModule.forRoot(routes)),//provides for routerlink,routeroutlet
    importProvidersFrom(HttpClientModule)//for api call
  ]
})
  .catch((err) => console.error(err));
