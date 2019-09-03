import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import axios from 'axios';

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
  styleUrls: ['./api-poc.component.css']
})
export class ApiPocComponent implements OnInit {
  public allSelected = false;
  public indeterminate = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() {
   // this.getPosts();
  }
  posts: PostElement[] = [];
  displayedColumns: string[] = ['userId', 'id', 'title'];
  dataSource = new MatTableDataSource(this.posts);

  ngOnInit() {
    this.getPosts();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then( (response) => {
       this.posts.push(...response.data);
       console.log(this.posts);
       this.dataSource.data = this.posts;
    });
  }

}
