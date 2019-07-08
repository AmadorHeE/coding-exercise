import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import {BehaviorSubject, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

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

  publications$ = this.publicationsSubj.asObservable();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private publicationServ: PublicationService
  ) {
  }

  ngOnInit(): void {
    this.publicationServ.getPublication()
      .subscribe((publicationPage: PublicationPage) => this.publicationsSubj.next(publicationPage));
  }

  ngOnDestroy(): void {
    this.publicationsSubj.complete();
  }

  onPageChange(paginationParams: PaginationParams) {
    this.publicationServ.getPublication(paginationParams)
      .subscribe((publicationPage: PublicationPage) => this.publicationsSubj.next(publicationPage));
  }
}
