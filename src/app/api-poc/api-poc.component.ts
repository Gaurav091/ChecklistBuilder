import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChecklistService } from '../shared/checklist.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  worktype: string;
  isChecked: boolean;
}

export interface PostElement {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-api-poc',
  templateUrl: './api-poc.component.html',
  styleUrls: ['./api-poc.component.css'],
})
export class ApiPocComponent implements OnInit {
  public allSelected = false;
  public indeterminate = false;
  public posts: PostElement[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private checklistService: ChecklistService) {
  }

  displayedColumns: string[] = ['userId', 'id', 'title'];
  dataSource = new MatTableDataSource(this.posts);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.checklistService.getPosts().then((response) => {
      this.posts.push(...response.data);
      this.dataSource.data = this.posts;
    });
    // this.checklistService.getPostsFromHttp().subscribe((response) => {
    //   this.posts.push(...response);
    //   this.dataSource.data = this.posts;
    //   console.log(this.posts);
    // });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
