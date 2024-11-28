import {Routes} from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./pages/index/index.component').then(m => m.IndexComponent)},
    {path: 'step0001', loadComponent: () => import('./steps/step0001/step0001.component').then(m => m.Step0001Component)},
    {path: 'step0002', loadComponent: () => import('./steps/step0002/step0002.component').then(m => m.Step0002Component)},
    {path: 'step0003', loadComponent: () => import('./steps/step0003/step0003.component').then(m => m.Step0003Component)},
    {path: 'step0004', loadComponent: () => import('./steps/step0004/step0004.component').then(m => m.Step0004Component)},
    {path: 'step0005', loadComponent: () => import('./steps/step0005/step0005.component').then(m => m.Step0005Component)},
    {path: 'step0006', loadComponent: () => import('./steps/step0006/step0006.component').then(m => m.Step0006Component)},
    {path: 'step0007', loadComponent: () => import('./steps/step0007/step0007.component').then(m => m.Step0007Component)},
];
