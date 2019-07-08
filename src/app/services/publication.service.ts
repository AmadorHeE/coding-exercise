import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {Author, deserializeAuthor} from '../models/author';
import {deserializePublicationArray, Publication} from '../models/publication';
import {DEFAULT_PUBL_PAGINATION_PARAMS, getHttpParamsForPublications, PaginationParams} from '../models/pagination-params';
import {PublicationPage} from '../models/publication-page';


@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) {
  }

  parse_link_header(header): number {
    if (header.length === 0) {
      return 0;
    }

    const lastUrl = header.split(',')[2].split(';')[0].replace(/<(.*)>/, '$1').trim();
    const params = lastUrl.split('?')[1].split('&');
    const lastPage = params[0].split('=')[1];
    const pageSize = params[1].split('=')[1];
    const total = lastPage * pageSize;

    return total;
  }

  getPublication(paginationParams: PaginationParams = DEFAULT_PUBL_PAGINATION_PARAMS): Observable<PublicationPage> {
    const httpParmas: HttpParams = getHttpParamsForPublications(paginationParams);
    const headers: HttpHeaders = new HttpHeaders().append('cache-control', 'no-cache');

    return this.http.get(`/publications`, {
      headers, params: httpParmas,
      observe: 'response'
    }).pipe(
      map(response => {
        const total = this.parse_link_header(response.headers.get('Link'));
        const data = deserializePublicationArray(response.body);
        const publicationPage: PublicationPage = {total, data};
        return publicationPage;
      })
    );
  }

  getAuthors(): Observable<Author[]> {
    const headers: HttpHeaders = new HttpHeaders().append('cache-control', 'no-cache');
    return this.http.get(`/authors`, {headers}).pipe(
      map(response => response as Author[])
    );
  }

  getAuthor(authorId: string): Observable<Author> {
    const headers: HttpHeaders = new HttpHeaders().append('cache-control', 'no-cache');
    return this.http.get(`/authors/${authorId}`, {headers}).pipe(
      map(response => deserializeAuthor(response))
    );
  }

  getPublicationsByAuthor(
    authorId: string,
    paginationParams: PaginationParams = DEFAULT_PUBL_PAGINATION_PARAMS
  ): Observable<PublicationPage> {
    const httpParmas: HttpParams = getHttpParamsForPublications(paginationParams);
    const headers: HttpHeaders = new HttpHeaders().append('cache-control', 'no-cache');

    return this.http.get(`/authors/${authorId}/publications`, {
      params: httpParmas,
      observe: 'response'
    }).pipe(
      map(response => {
        const total = this.parse_link_header(response.headers.get('Link'));
        const data = deserializePublicationArray(response.body);
        const publicationPage: PublicationPage = {total, data};
        return publicationPage;
      })
    );
  }
}

/*
const publicationPage: PublicationPage = {
      data: [
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          author: {
            id: 1,
            firstName: 'Emanuel',
            lastName: 'Amador',
            email: 'amador@example.com',
            avatar: ''
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          author: {
            id: 1,
            firstName: 'Hugo',
            lastName: 'Lopez',
            email: 'lopez@example.com',
            avatar: ''
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          author: {
            id: 1,
            firstName: 'Marlen',
            lastName: 'Ramirez',
            email: 'rz@example.com',
            avatar: ''
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          author: {
            id: 1,
            firstName: 'Axel',
            lastName: 'Alcaraz',
            email: 'alcaraz@example.com',
            avatar: ''
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          author: {
            id: 1,
            firstName: 'Eduardo',
            lastName: 'Malfavon',
            email: 'lalo@example.com',
            avatar: ''
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          author: {
            id: 1,
            firstName: 'Wen :3',
            lastName: 'Sosa',
            email: 'miss_sosa@example.com',
            avatar: ''
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          author: {
            id: 1,
            firstName: 'Emanuel',
            lastName: 'Amador',
            email: 'amador@example.com',
            avatar: ''
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          author: {
            id: 1,
            firstName: 'Hugo',
            lastName: 'Lopez',
            email: 'lopez@example.com',
            avatar: ''
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          author: {
            id: 1,
            firstName: 'Marlen',
            lastName: 'Ramirez',
            email: 'rz@example.com',
            avatar: ''
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          author: {
            id: 1,
            firstName: 'Axel',
            lastName: 'Alcaraz',
            email: 'alcaraz@example.com',
            avatar: ''
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          author: {
            id: 1,
            firstName: 'Eduardo',
            lastName: 'Malfavon',
            email: 'lalo@example.com',
            avatar: ''
          }
        },
        {
          title: 'Reactive programming in angular',
          date: new Date(),
          description: 'This need a real, long and interesting description',
          author: {
            id: 1,
            firstName: 'Wen :3',
            lastName: 'Sosa',
            email: 'miss_sosa@example.com',
            avatar: ''
          }
        }
      ]
    };
*/
