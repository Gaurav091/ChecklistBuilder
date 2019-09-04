import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor() { }

  getPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
  }
}
