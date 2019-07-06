import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';

import {Publication} from '../models/publication';
import {PaginationParams} from '../models/pagination-params';
import {PublicationPage} from '../models/publication-page';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) {
  }

  getPublication(params: PaginationParams = {}): Observable<PublicationPage> {
    const publicationPage: PublicationPage = {
      data: [
        {
          title: 'da',
          date: new Date(),
          description: 'something'
        },
        {
          title: 'de',
          date: new Date(),
          description: 'something'
        },
        {
          title: 'di',
          date: new Date(),
          description: 'something'
        },
        {
          title: 'do',
          date: new Date(),
          description: 'something'
        },
        {
          title: 'du',
          date: new Date(),
          description: 'something'
        },
        {
          title: 'da',
          date: new Date(),
          description: 'something'
        },
        {
          title: 'de',
          date: new Date(),
          description: 'something'
        },
        {
          title: 'di',
          date: new Date(),
          description: 'something'
        },
        {
          title: 'do',
          date: new Date(),
          description: 'something'
        },
        {
          title: 'du',
          date: new Date(),
          description: 'something'
        }
      ]
    };
    // return this.http.get(`s`);
    return of(publicationPage);
  }
}
