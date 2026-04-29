import { Routes } from '@angular/router';
import { MachinesOverview } from './View/machines-overview/machines-overview';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/machines',
        pathMatch: 'full'
    },
    {
        path: 'machines',
        component: MachinesOverview
    }
];
