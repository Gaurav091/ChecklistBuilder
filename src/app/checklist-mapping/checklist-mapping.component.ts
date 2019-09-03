import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface MappingElement {
  requestType: string;
  requestCode: string;
  isRequestTypeChecked: boolean;
  isRequestCodeChecked: boolean;
}

const ELEMENT_DATA: MappingElement[] = [
  {isRequestTypeChecked: false , isRequestCodeChecked: false, requestType: 'Sample request', requestCode: 'Sample Code'},
  {isRequestTypeChecked: false , isRequestCodeChecked: false, requestType: 'Sample request', requestCode: 'Sample Code'},
  {isRequestTypeChecked: false , isRequestCodeChecked: false, requestType: 'Sample request', requestCode: 'Sample Code'},
  {isRequestTypeChecked: false , isRequestCodeChecked: false, requestType: 'Sample request', requestCode: 'Sample Code'},
  {isRequestTypeChecked: false , isRequestCodeChecked: false, requestType: 'Sample request', requestCode: 'Sample Code'},
  {isRequestTypeChecked: false , isRequestCodeChecked: false, requestType: 'Sample request', requestCode: 'Sample Code'}
];

@Component({
  selector: 'app-checklist-mapping',
  templateUrl: './checklist-mapping.component.html',
  styleUrls: ['./checklist-mapping.component.css']
})
export class ChecklistMappingComponent implements OnInit {
  public allRequestTypesSelected = false;
  public allRequestCodesSelected = false;
  public allRequestTypesIndeterminate = false;
  public allRequestCodesIndeterminate = false;
  constructor() { }

  displayedColumns: string[] = ['requestTypeChecked', 'requestType', 'requestCodeChecked', 'requestCode'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {

  }

  requestTypeChanged(item: any, event: any) {
    item.isRequestTypeChecked = event.checked;
    const totalSelected = ELEMENT_DATA.filter(i => i.isRequestTypeChecked).length;
    if (totalSelected === 0) {
      this.allRequestTypesSelected = false;
      this.allRequestTypesIndeterminate = false;
    } else if (totalSelected > 0 && totalSelected < ELEMENT_DATA.length) {
      this.allRequestTypesSelected = false;
      this.allRequestTypesIndeterminate = true;
    } else if (totalSelected === ELEMENT_DATA.length) {
      this.allRequestTypesSelected = true;
      this.allRequestTypesIndeterminate = false;
    }
  }

  requestCodeChanged(item: any, event: any) {
    item.isRequestCodeChecked = event.checked;
    const totalSelected = ELEMENT_DATA.filter(i => i.isRequestCodeChecked).length;
    if (totalSelected === 0) {
      this.allRequestCodesSelected = false;
      this.allRequestCodesIndeterminate = false;
    } else if (totalSelected > 0 && totalSelected < ELEMENT_DATA.length) {
      this.allRequestCodesSelected = false;
      this.allRequestCodesIndeterminate = true;
    } else if (totalSelected === ELEMENT_DATA.length) {
      this.allRequestCodesSelected = true;
      this.allRequestCodesIndeterminate = false;
    }
  }

  toggleSelectAllRequestCodes(event) {
    this.allRequestCodesSelected = event.checked;
    ELEMENT_DATA.forEach(item => {
      item.isRequestCodeChecked = event.checked;
    });
  }

  toggleSelectAllRequestTypes(event) {
    this.allRequestTypesSelected = event.checked;
    ELEMENT_DATA.forEach(item => {
      item.isRequestTypeChecked = event.checked;
    });
  }


}
