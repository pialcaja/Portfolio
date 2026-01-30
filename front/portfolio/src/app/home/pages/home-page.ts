import { Component, Input } from '@angular/core';
import { ProjectsCard } from '../../projects/components/projects-card/project-card';
import { ProjectsService } from '../../projects/services/projects-service';
import { Project } from '../../projects/models/project-model';
import { CommonModule } from '@angular/common';
import { TechIcon } from '../../shared/components/tech-icon/tech-icon';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, TechIcon, ProjectsCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getAll();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }
}
