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
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          user: {
            fistName: 'Emanuel',
            lastName: 'Amador',
            email: 'amador@example.com'
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          user: {
            fistName: 'Hugo',
            lastName: 'Lopez',
            email: 'lopez@example.com'
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          user: {
            fistName: 'Marlen',
            lastName: 'Ramirez',
            email: 'rz@example.com'
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          user: {
            fistName: 'Axel',
            lastName: 'Alcaraz',
            email: 'alcaraz@example.com'
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          user: {
            fistName: 'Eduardo',
            lastName: 'Malfavon',
            email: 'lalo@example.com'
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          user: {
            fistName: 'Wen :3',
            lastName: 'Sosa',
            email: 'miss_sosa@example.com'
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          user: {
            fistName: 'Emanuel',
            lastName: 'Amador',
            email: 'amador@example.com'
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          user: {
            fistName: 'Hugo',
            lastName: 'Lopez',
            email: 'lopez@example.com'
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          user: {
            fistName: 'Marlen',
            lastName: 'Ramirez',
            email: 'rz@example.com'
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          user: {
            fistName: 'Axel',
            lastName: 'Alcaraz',
            email: 'alcaraz@example.com'
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          user: {
            fistName: 'Eduardo',
            lastName: 'Malfavon',
            email: 'lalo@example.com'
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          user: {
            fistName: 'Wen :3',
            lastName: 'Sosa',
            email: 'miss_sosa@example.com'
          }
        }
      ]
    };
    // return this.http.get(`s`);
    return of(publicationPage);
  }
}
