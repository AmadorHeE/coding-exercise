import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PublicationsHomePageComponent} from './pages/publications-home-page/publications-home-page.component';
import {PublicationPageComponent} from './pages/publication-page/publication-page.component';
import {AutorPageComponent} from './pages/autor-page/autor-page.component';

const routes: Routes = [
  {
    path: '',
    component: PublicationsHomePageComponent,
    children: [
      {
        path: 'autor/:id',
        component: AutorPageComponent,
      },
      {
        path: '',
        component: PublicationPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
