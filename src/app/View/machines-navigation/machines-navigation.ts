import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MachineNavBtn } from '@components/machine-nav-btn/machine-nav-btn';
import { Machine } from '@services/machine';

@Component({
  selector: 'app-machines-navigation',
  imports: [
    AsyncPipe,
    MachineNavBtn
  ],
  templateUrl: './machines-navigation.html',
})
export class MachinesNavigation {
  machineService = inject(Machine);
  machines$ = this.machineService.machines$;

  refresh() {
    this.machineService.refresh();
  }
}
