import { Component, OnInit, Input, ViewEncapsulation, Optional } from '@angular/core';
import { ColumnComponent } from './column/column.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dataSource: any[];

  @Input() columns: ColumnComponent[];

  ngOnInit() {
  }

}
