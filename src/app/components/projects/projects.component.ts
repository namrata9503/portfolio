import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  data: any;

  constructor(private projectService: ProjectsService){
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((response) => 
    {
    this.data = response;
    })
  }
  }


