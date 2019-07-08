import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {UserPopupComponent} from '../../components/user-popup/user-popup.component';
import {PublicationService} from '../../services/publication.service';

import {PublicationPage} from '../../models/publication-page';

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
    private publicationServ: PublicationService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.publicationServ.getPublication()
      .subscribe((publicationPage: PublicationPage) => this.publicationsSubj.next(publicationPage));
  }

  ngOnDestroy(): void {
    this.publicationsSubj.complete();
  }

  openUserDialog() {
    const dialogRef = this.dialog.open(UserPopupComponent, {
      hasBackdrop: false,
      disableClose: true
    });
  }
}
