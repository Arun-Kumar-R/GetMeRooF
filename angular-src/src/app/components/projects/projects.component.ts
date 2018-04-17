import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
  projects: any;

  constructor(private _projectsService:ProjectsService) { }

  ngOnInit() {
    this._projectsService.getProjects()
    .subscribe(resProjectsData => this.projects =resProjectsData);
  }

}
