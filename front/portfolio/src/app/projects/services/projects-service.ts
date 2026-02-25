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
      demo: 'https://www.youtube.com/@pialcaja'
    },
    {
      title: 'Sistema de carrito de compras',
      description: 'E-commerce de videojuegos desarrollado con Spring Boot y Angular.',
      tech: ['angular', 'spring', 'mysql'],
      image: 'assets/images/projects/carrito.webp',
      github: 'https://github.com/pialcaja/ProyectoTienda',
      demo: 'https://www.youtube.com/@pialcaja'
    }
  ];

  getAll(): Project[] {
    return this.projects;
  }
}
