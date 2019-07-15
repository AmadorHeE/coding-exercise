import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {PublicationService} from '../../services/publication.service';
import {Author} from '../../models/author';


@Component({
  selector: 'app-publications-home-page',
  templateUrl: './publications-home-page.component.html',
  styleUrls: ['./publications-home-page.component.scss']
})
export class PublicationsHomePageComponent implements OnInit {
  users$: Observable<Author[]>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private publicationServ: PublicationService) {
  }

  /**
   * Initializes the publication's home page: Retrieves all users available.
   */
  ngOnInit() {
    this.users$ = this.publicationServ.getAuthors();
  }

}
