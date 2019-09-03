import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  question: string;
  questionType: string;
  isChecked: boolean;
}

export interface TemplateElement {
  template: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {isChecked: false , question: 'Sample question', questionType: 'Sample Type'},
  {isChecked: false , question: 'Sample question', questionType: 'Sample Type'},
  {isChecked: false , question: 'Sample question', questionType: 'Sample Type'},
  {isChecked: false , question: 'Sample question', questionType: 'Sample Type'},
  {isChecked: false , question: 'Sample question', questionType: 'Sample Type'},
  {isChecked: false , question: 'Sample question', questionType: 'Sample Type'}
];

const TEMPLATE_DATA: TemplateElement[] = [
  {template: 'Templatename1'},
  {template: 'Templatename2'},
  {template: 'Templatename3'},
  {template: 'Templatename4'},
  {template: 'Templatename5'},
  {template: 'Templatename6'}
];

@Component({
  selector: 'app-template-question-bank',
  templateUrl: './template-question-bank.component.html',
  styleUrls: ['./template-question-bank.component.css']
})



export class TemplateQuestionBankComponent implements OnInit {
  public allSelected = false;
  public indeterminate = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() { }

  displayedColumns: string[] = ['checked', 'question', 'questionType'];
  displayedColumns1: string[] = ['template'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource(TEMPLATE_DATA);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  itemChanged(item, event) {
    item.isChecked = event.checked;

    const totalSelected = ELEMENT_DATA.filter(i => i.isChecked).length;
    if (totalSelected === 0) {
      this.allSelected = false;
      this.indeterminate = false;
    } else if (totalSelected > 0 && totalSelected < ELEMENT_DATA.length) {
      this.allSelected = false;
      this.indeterminate = true;
    } else if (totalSelected === ELEMENT_DATA.length) {
      this.allSelected = true;
      this.indeterminate = false;
    }
  }

  toggleSelectAll(event) {
    this.allSelected = event.checked;
    ELEMENT_DATA.forEach(item => {
      item.isChecked = event.checked;
    });
  }

}
