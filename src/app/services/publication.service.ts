import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';

import {Publication} from '../models/publication';
import {PaginationParams} from '../models/pagination-params';
import {PublicationPage} from '../models/publication-page';
import {User} from '../models/user';

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
            id: 1,
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
            id: 1,
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
            id: 1,
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
            id: 1,
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
            id: 1,
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
            id: 1,
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
            id: 1,
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
            id: 1,
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
            id: 1,
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
            id: 1,
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
            id: 1,
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
            id: 1,
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

  getUsers() {
    const users: User[] = [
      {
        id: 1,
        fistName: 'Emanuel',
        lastName: 'Amador',
        email: 'amador@example.com'
      },
      {
        id: 2,
        fistName: 'Marlen',
        lastName: 'Ramirez',
        email: 'rz@example.com'
      },
      {
        id: 3,
        fistName: 'Emanuel',
        lastName: 'Amador',
        email: 'amador@example.com'
      },
      {
        id: 4,
        fistName: 'Marlen',
        lastName: 'Ramirez',
        email: 'rz@example.com'
      },
      {
        id: 5,
        fistName: 'Emanuel',
        lastName: 'Amador',
        email: 'amador@example.com'
      },
      {
        id: 6,
        fistName: 'Marlen',
        lastName: 'Ramirez',
        email: 'rz@example.com'
      },
      {
        id: 7,
        fistName: 'Emanuel',
        lastName: 'Amador',
        email: 'amador@example.com'
      },
      {
        id: 8,
        fistName: 'Marlen',
        lastName: 'Ramirez',
        email: 'rz@example.com'
      },
      {
        id: 9,
        fistName: 'Emanuel',
        lastName: 'Amador',
        email: 'amador@example.com'
      },
      {
        id: 10,
        fistName: 'Marlen',
        lastName: 'Ramirez',
        email: 'rz@example.com'
      },
      {
        id: 11,
        fistName: 'Emanuel',
        lastName: 'Amador',
        email: 'amador@example.com'
      },
      {
        id: 12,
        fistName: 'Marlen',
        lastName: 'Ramirez',
        email: 'rz@example.com'
      },
      {
        id: 13,
        fistName: 'Emanuel',
        lastName: 'Amador',
        email: 'amador@example.com'
      },
      {
        id: 14,
        fistName: 'Marlen',
        lastName: 'Ramirez',
        email: 'rz@example.com'
      }
    ];

    return of(users);
  }
}
