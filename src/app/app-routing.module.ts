import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicationPageComponent} from './pages/publication-page/publication-page.component';

const routes: Routes = [
  {
    path: '',
    component: PublicationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
