import { Injectable } from '@angular/core';
import { Project } from '../models/project-model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  private projects: Project[] = [
    {
      title: 'Sistema de Gestión de Usuarios',
      description: 'Proyecto FullStack que gestiona usuarios y sus roles.',
      tech: ['angular', 'spring', 'mysql'],
      image: 'assets/images/projects/gestion-usuarios.webp',
      github: 'https://github.com/pialcaja/ProyectoGestionUsuarios',
      demo: 'dsfd'
    },
    {
      title: 'Sistema de Gestión de Usuarios',
      description: 'Proyecto FullStack que gestiona usuarios y sus roles.',
      tech: ['angular', 'spring', 'mysql'],
      image: '',
      github: 'https://github.com/pialcaja/ProyectoGestionUsuarios',
      demo: ''
    }
  ];

  getAll(): Project[] {
    return this.projects;
  }
}
