import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {PublicationService} from '../../services/publication.service';

import {User} from '../../models/user';
import {PaginationParams} from '../../models/pagination-params';
import {PublicationPage} from '../../models/publication-page';


@Component({
  selector: 'app-autor-page',
  templateUrl: './autor-page.component.html',
  styleUrls: ['./autor-page.component.scss']
})
export class AutorPageComponent implements OnInit, OnDestroy {
  private publicationsSubj = new BehaviorSubject<PublicationPage>(null);

  author$: Observable<User>;
  publications$: Observable<PublicationPage> = this.publicationsSubj.asObservable();

  constructor(private route: ActivatedRoute, private publicationServ: PublicationService) {
  }

  ngOnInit() {
    this.author$ = this.route.paramMap.pipe(
      switchMap(params => this.publicationServ.getAuthot(params.get('id')))
    );

    this.route.paramMap.pipe(
      switchMap(params => {
        const paginationParams: PaginationParams = {
          page: '1',
          limit: '10',
          sort: 'date',
          order: 'desc',
          expand: 'author'
        };
        return this.publicationServ.getPublicationsByAuthor(params.get('id'), paginationParams);
      })
    ).subscribe((publicationPage: PublicationPage) => this.publicationsSubj.next(publicationPage));
  }

  ngOnDestroy(): void {
    this.publicationsSubj.complete();
  }

  onPageChange(paginationParams: PaginationParams) {
    this.author$.pipe(
      switchMap(author => this.publicationServ.getPublicationsByAuthor(String(author.id), paginationParams))
    ).subscribe((publicationPage: PublicationPage) => this.publicationsSubj.next(publicationPage));
  }
}
