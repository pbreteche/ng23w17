import { NgModule } from '@angular/core';
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
    TranslitPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    httpInterceptorsProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeFr);
  }
 }
