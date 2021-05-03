import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';

@Component({
  selector: 'ngx-material-table-title',
  styleUrls: ['./title.component.scss'],
  template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ngx-material-sort-link sort"
                [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ngx-material-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `,
})
export class TitleComponent implements OnChanges {

  currentDirection = '';
  @Input() column: Column;
  @Input() source: DataSource;
  @Output() sort = new EventEmitter<any>();

  protected dataChangedSub: Subscription;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.source) {
      if (!changes.source.firstChange) {
        this.dataChangedSub.unsubscribe();
      }
      this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
        const sortConf = this.source.getSort();

        if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
          this.currentDirection = sortConf[0]['direction'];
        } else {
          this.currentDirection = '';
        }

        sortConf.forEach((fieldConf: any) => {

        });
      });
    }
  }

  _sort(event: any) {
    event.preventDefault();
    this.changeSortDirection();
    this.source.setSort([
      {
        field: this.column.id,
        direction: this.currentDirection,
        compare: this.column.getCompareFunction(),
      },
    ]);
    this.sort.emit(null);
  }

  changeSortDirection(): string {
    if (this.currentDirection) {
      const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
      this.currentDirection = newDirection;
    } else {
      this.currentDirection = this.column.sortDirection;
    }
    return this.currentDirection;
  }
}
