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
  @Input() publicationPage: PublicationPage;
  @Output() page: EventEmitter<PaginationParams> = new EventEmitter<PaginationParams>();

  /**
   * Paginator settings
   */
  private offset = '1';
  private limit = '10';
  private sort = 'date';
  private order = 'desc';

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Angular hook that handles every value the parent component sends to the this component.
   * @param changes: Object with information the parent component sends.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.publicationPage = changes.data.currentValue;
    }
  }

  /**
   * Handles the event that is emitted when the user selects a different page size or navigates to another page,
   * and emit an event to the parent component.
   * @param pageEvent: Object with information about the change page event.
   */
  onPageChange(pageEvent: PageEvent) {
    this.offset = String(pageEvent.pageIndex + 1);
    this.limit = String(pageEvent.pageSize);
    this.emitValue();
  }

  /**
   * Handles the event that is emitted when the user selects a different order for publications,
   * and emit an event to the parent component.
   * @param matSelectChange: Object that is emitted when the select value has changed.
   */
  onChangeSelection(matSelectChange: MatSelectChange) {
    this.order = matSelectChange.value;
    this.emitValue();
  }

  /**
   * Issues events to the parent component, each event requests for a specific publications page
   */
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
