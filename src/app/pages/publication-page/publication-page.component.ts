import {Component, OnDestroy, OnInit} from '@angular/core';

import {BehaviorSubject} from 'rxjs';
import {SubSink} from 'subsink';

import {PublicationService} from '../../services/publication.service';

import {PublicationPage} from '../../models/publication-page';
import {PaginationParams} from '../../models/pagination-params';

@Component({
  selector: 'app-publication-page',
  templateUrl: './publication-page.component.html',
  styleUrls: ['./publication-page.component.scss']
})
export class PublicationPageComponent implements OnInit, OnDestroy {
  private publicationsSubj = new BehaviorSubject<PublicationPage>(null);
  private subs = new SubSink();

  publications$ = this.publicationsSubj.asObservable();

  constructor(private publicationServ: PublicationService) {
  }

  /**
   * Initializes the publication's page: Requests for the first publications page.
   */
  ngOnInit(): void {
    this.subs.sink = this.publicationServ.getPublication()
      .subscribe((publicationPage: PublicationPage) => this.publicationsSubj.next(publicationPage));
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
   * each event requests for a new publication page.
   * @param paginationParams: Pagination params.
   */
  onPageChange(paginationParams: PaginationParams) {
    this.subs.sink = this.publicationServ.getPublication(paginationParams)
      .subscribe((publicationPage: PublicationPage) => this.publicationsSubj.next(publicationPage));
  }
}
