import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../../models/project-model';
import { TechIcon } from '../../../shared/components/tech-icon/tech-icon';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TechIcon],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectsCard {

  @Input({ required: true })
  project!: Project;

}
