import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsCard } from '../components/projects-card/project-card';
import { Project } from '../models/project-model';
import { ProjectsService } from '../services/projects-service';

@Component({
  selector: 'app-projects-page',
  imports: [CommonModule, ProjectsCard],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {

  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getAll();
  }
}
