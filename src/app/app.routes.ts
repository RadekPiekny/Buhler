import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/machines',
        pathMatch: 'full'
    },
    {
        path: 'machines',
        loadComponent: () =>
            import('@views/machines-shell/machines-shell').then(
                (m) => m.MachinesShell
            ),
            children: [
                {
                    path: '',
                    redirectTo: 'overview',
                    pathMatch: 'full'
                },
                {
                    path: 'overview',
                    loadComponent: () =>
                    import('@views/machines-overview/machines-overview').then(
                        (m) => m.MachinesOverview
                    ),
                },
                {
                    path: ':id',
                    loadComponent: () =>
                    import('@views/machine-detail/machine-detail').then(
                        (m) => m.MachineDetail
                    ),
                }
            ]
    },
];
