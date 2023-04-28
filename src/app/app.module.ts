import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactTemplateFormComponent } from './contact-template-form/contact-template-form.component';
import { ContactReactiveFormComponent } from './contact-reactive-form/contact-reactive-form.component';
import { MaxDateDirective } from './directives/max-date.directive';
import { MinDateDirective } from './directives/min-date.directive';
import { httpInterceptorsProviders } from './interceptors';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { LoginComponent } from './login/login.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { TranslitPipe } from './pipe/translit.pipe';
import { IndexComponent } from './component/group/index/index.component';
import { DetailComponent } from './component/group/detail/detail.component';
import { HighlightedDirective } from './directive/highlighted.directive';
import { UnlessDirective } from './directive/unless.directive';
import { Demo } from './service/demo.service';

export const API_URL_TOKEN = new InjectionToken<string>('app.api-url');

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactListComponent,
    ContactTemplateFormComponent,
    ContactReactiveFormComponent,
    MaxDateDirective,
    MinDateDirective,
    LoginComponent,
    TranslitPipe,
    IndexComponent,
    DetailComponent,
    HighlightedDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    httpInterceptorsProviders,
    // Voici les types de providers disponibles
    // Lorsque nous souhaitons déclarer explicitement un service
    Demo,  // Raccourcis d'écriture, une classe : équivalent à l'écriture ci-dessous
    { provide: Demo, useClass: Demo }, // provider "useClass", inférence sur le constructeur pour instancier le service
    { provide: Demo, useValue: {} }, // le service existe déjà en tant que valeur, l'utiliser directement
    { provide: Demo, useExisting: Demo }, // le service existe déjà en tant que service, le réutiliser (éventuellement avec une autre clé)
    { provide: Demo, useFactory: () => new Demo() }, // on fournit la factory
    { provide: API_URL_TOKEN, useValue: 'api.example.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeFr);
  }
 }
