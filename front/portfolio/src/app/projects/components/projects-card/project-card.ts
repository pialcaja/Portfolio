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

  onMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  }

}
