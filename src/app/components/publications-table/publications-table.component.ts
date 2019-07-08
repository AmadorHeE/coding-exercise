import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatSelectChange, PageEvent} from '@angular/material';

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

  private offset;
  private limit;
  private sort = 'date';
  private order = 'desc';

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
    this.offset = String(pageEvent.pageIndex + 1);
    this.limit = String(pageEvent.pageSize);
    this.emitValue();
  }

  onChangeSelection(matSelectChange: MatSelectChange) {
    this.order = matSelectChange.value;
    this.emitValue();
  }

  emitValue() {
    const paginationParams: PaginationParams = {
      page: this.offset,
      limit: this.limit,
      sort: this.sort,
      order: this.order,
      expand: 'author'
    };
    this.page.emit(paginationParams);
  }
}

/*
searchField = new FormControl();
 */
