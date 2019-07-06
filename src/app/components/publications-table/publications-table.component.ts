import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PublicationPage} from '../../models/publication-page';

@Component({
  selector: 'app-publications-table',
  templateUrl: './publications-table.component.html',
  styleUrls: ['./publications-table.component.scss']
})
export class PublicationsTableComponent implements OnInit, OnChanges {
  @Input() data: PublicationPage;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.data) {
      this.data = changes.data.currentValue;
    }
  }
}
