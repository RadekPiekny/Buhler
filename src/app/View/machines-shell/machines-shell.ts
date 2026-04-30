import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Machine } from '@services/machine';
import { MachinesNavigation } from '@views/machines-navigation/machines-navigation';

@Component({
  selector: 'app-machines-shell',
  imports: [
    RouterOutlet,
    MachinesNavigation
  ],
  templateUrl: './machines-shell.html',
})
export class MachinesShell {
  machineService = inject(Machine);
  machines$ = this.machineService.machines$;
}
