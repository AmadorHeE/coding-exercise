import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {PublicationsTableComponent} from './components/publications-table/publications-table.component';
import {PublicationPageComponent} from './pages/publication-page/publication-page.component';
import {UserPopupComponent} from './components/user-popup/user-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicationsTableComponent,
    PublicationPageComponent,
    UserPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    UserPopupComponent
  ]
})
export class AppModule {
}
