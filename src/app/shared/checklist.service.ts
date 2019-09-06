import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
// import { Observable } from 'rxjs';

export interface PostElement {
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsFromHttp() {
    return this.httpClient.get<PostElement[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
