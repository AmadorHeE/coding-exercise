import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PageEvent} from '@angular/material';

import {PublicationPage} from '../../models/publication-page';
import {PaginationParams} from '../../models/pagination-params';

@Component({
  selector: 'app-publications-table',
  templateUrl: './publications-table.component.html',
  styleUrls: ['./publications-table.component.scss']
})
export class PublicationsTableComponent implements OnInit, OnChanges {
  @Input() data: PublicationPage;
  @Output() page: EventEmitter<PaginationParams> = new EventEmitter<PaginationParams>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.data = changes.data.currentValue;
    }
  }

  onPageChange(pageEvent: PageEvent) {
    console.log(pageEvent);
    const page = String(pageEvent.pageIndex + 1);
    const limit = String(pageEvent.pageSize);
    const paginationParams: PaginationParams = {page, limit, expand: 'author'};
    this.page.emit(paginationParams);
  }
}

/*
searchField = new FormControl();
 */
