import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MachineBox } from '@components/machine-box/machine-box';
import { Machine } from '@services/machine';

@Component({
  selector: 'app-machines-overview',
  imports: [
    MachineBox,
    AsyncPipe
  ],
  templateUrl: './machines-overview.html'
})
export class MachinesOverview {

  machineService = inject(Machine);
  machines$ = this.machineService.machines$;

}
