import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {SubSink} from 'subsink';

import {PublicationService} from '../../services/publication.service';

import {Author} from '../../models/author';
import {DEFAULT_PUBL_PAGINATION_PARAMS, PaginationParams} from '../../models/pagination-params';
import {PublicationPage} from '../../models/publication-page';


@Component({
  selector: 'app-autor-page',
  templateUrl: './autor-page.component.html',
  styleUrls: ['./autor-page.component.scss']
})
export class AutorPageComponent implements OnInit, OnDestroy {
  private publicationsSubj = new BehaviorSubject<PublicationPage>(null);
  private subs = new SubSink();

  author$: Observable<Author>;
  publications$: Observable<PublicationPage> = this.publicationsSubj.asObservable();

  constructor(private route: ActivatedRoute, private publicationServ: PublicationService) {
  }

  /**
   * Initializes the author's page: Retrieves the author's id and requests for the first author's publications page.
   */
  ngOnInit() {
    this.author$ = this.route.paramMap.pipe(
      switchMap(params => this.publicationServ.getAuthor(params.get('id')))
    );

    this.subs.sink = this.route.paramMap.pipe(
      switchMap(params => {
        return this.publicationServ.getPublicationsByAuthor(params.get('id'), DEFAULT_PUBL_PAGINATION_PARAMS);
      })
    ).subscribe((publicationPage: PublicationPage) => this.publicationsSubj.next(publicationPage));
  }

  /**
   * Release memory
   */
  ngOnDestroy(): void {
    this.publicationsSubj.complete();
    this.subs.unsubscribe();
  }

  /**
   * Handles the events that are emitted by the publications table,
   * each event requests for a new publication page
   * @param paginationParams: Pagination params.
   */
  onPageChange(paginationParams: PaginationParams) {
    this.subs.sink = this.author$.pipe(
      switchMap(author => this.publicationServ.getPublicationsByAuthor(String(author.id), paginationParams))
    ).subscribe((publicationPage: PublicationPage) => this.publicationsSubj.next(publicationPage));
  }
}
