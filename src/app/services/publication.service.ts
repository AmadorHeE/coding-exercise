import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {Author, deserializeAuthor} from '../models/author';
import {deserializePublicationArray} from '../models/publication';
import {DEFAULT_PUBL_PAGINATION_PARAMS, getHttpParamsForPublications, PaginationParams} from '../models/pagination-params';
import {PublicationPage} from '../models/publication-page';


@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) {
  }

  /**
   * Parses the link header to calculate how many pages are available.
   * @param linkHeaderContent: Link header content.
   */
  parse_link_header(linkHeaderContent: string): number {
    if (linkHeaderContent.length === 0) {
      return 0;
    }

    const urls: string[] = linkHeaderContent.split(',');
    const lastUrl = urls.find(url => url.split(';')[1].split('=')[1] === '"last"')
      .split(';')[0].replace(/<(.*)>/, '$1').trim();
    const params = lastUrl.split('?')[1].split('&');
    const lastPage = Number(params[0].split('=')[1]);
    const pageSize = Number(params[1].split('=')[1]);

    return lastPage * pageSize;
  }

  /**
   * Gets a publication page.
   * @param paginationParams: Pagination parameters.
   */
  getPublication(paginationParams: PaginationParams = DEFAULT_PUBL_PAGINATION_PARAMS): Observable<PublicationPage> {
    const httpParmas: HttpParams = getHttpParamsForPublications(paginationParams);
    const headers: HttpHeaders = new HttpHeaders().append('cache-control', 'no-cache');

    return this.http.get(`/api/v1/publications`, {
      headers, params: httpParmas,
      observe: 'response'
    }).pipe(
      map(response => {
        const total = this.parse_link_header(response.headers.get('Link'));
        const data = deserializePublicationArray(response.body);
        const publicationPage: PublicationPage = {total, data};
        return publicationPage;
      }),
      tap(so => console.log(so))
    );
  }

  /**
   * Gets a list with all the authors,
   */
  getAuthors(): Observable<Author[]> {
    const headers: HttpHeaders = new HttpHeaders().append('cache-control', 'no-cache');
    return this.http.get(`/api/v1/authors`, {headers}).pipe(
      map(response => response as Author[])
    );
  }

  /**
   * Gets a specific author
   * @param authorId: authorId: Author's id.
   */
  getAuthor(authorId: string): Observable<Author> {
    const headers: HttpHeaders = new HttpHeaders().append('cache-control', 'no-cache');
    return this.http.get(`/api/v1/authors/${authorId}`, {headers}).pipe(
      map(response => deserializeAuthor(response))
    );
  }

  /**
   * Gets a publications page from a specific author.
   * @param authorId: Author's id.
   * @param paginationParams: Pagination parameters.
   */
  getPublicationsByAuthor(
    authorId: string,
    paginationParams: PaginationParams = DEFAULT_PUBL_PAGINATION_PARAMS
  ): Observable<PublicationPage> {
    const httpParmas: HttpParams = getHttpParamsForPublications(paginationParams);

    return this.http.get(`/api/v1/authors/${authorId}/publications`, {
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
