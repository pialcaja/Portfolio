import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () =>
            import('./home/pages/home-page').then(m => m.HomePage),
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./projects/pages/projects-page').then(m => m.ProjectsPage),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
