import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  worktype: string;
  isChecked: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {isChecked: false , position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', worktype: 'sample workType'},
  {isChecked: false , position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', worktype: 'sample workType'},
  {isChecked: false , position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', worktype: 'sample workType'},
  {isChecked: false , position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', worktype: 'sample workType'},
  {isChecked: false , position: 5, name: 'Boron', weight: 10.811, symbol: 'B', worktype: 'sample workType'},
  {isChecked: false , position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', worktype: 'sample workType'},
  {isChecked: false , position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', worktype: 'sample workType'},
  {isChecked: false , position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', worktype: 'sample workType'},
  {isChecked: false , position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', worktype: 'sample workType'},
  {isChecked: false , position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', worktype: 'sample workType'},
];

@Component({
  selector: 'app-checklist-question-bank',
  templateUrl: './checklist-question-bank.component.html',
  styleUrls: ['./checklist-question-bank.component.css']
})
export class ChecklistQuestionBankComponent implements OnInit {
  public allSelected = false;
  public indeterminate = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() { }

  displayedColumns: string[] = ['checked', 'position', 'name', 'weight', 'symbol', 'worktype'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

