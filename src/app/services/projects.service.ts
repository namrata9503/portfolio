import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  url: string = '../../assets/projects.json'
  constructor(private http: HttpClient) { }


  getProjects() {
    return this.http.get(this.url);
  }
}
