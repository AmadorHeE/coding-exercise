import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';

import {PublicationsHomePageComponent} from './pages/publications-home-page/publications-home-page.component';
import {PublicationPageComponent} from './pages/publication-page/publication-page.component';
import {AutorPageComponent} from './pages/autor-page/autor-page.component';

import {AppComponent} from './app.component';
import {PublicationsTableComponent} from './components/publications-table/publications-table.component';
import {MatPaginatorIntl} from '@angular/material';
import {MatPaginatorIntlCustom} from './shared/helpers/personalize-material-paginator';


@NgModule({
  declarations: [
    AppComponent,
    PublicationsTableComponent,
    PublicationsHomePageComponent,
    PublicationPageComponent,
    AutorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorIntlCustom
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
