import { Component, OnInit, Input } from '@angular/core';
import { Direct } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html'
})
export class ColumnComponent implements OnInit {

  @Input() title: string;

  @Input() field: any;

  constructor() { }

  ngOnInit() {
  }

}
