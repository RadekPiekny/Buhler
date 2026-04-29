import { Component } from '@angular/core';
import { MachineBox } from '@components/machine-box/machine-box';
import { MachineStatus } from '@models/MachineState';

@Component({
  selector: 'app-machines-overview',
  imports: [
    MachineBox
  ],
  templateUrl: './machines-overview.html'
})
export class MachinesOverview {
  ms = MachineStatus;
}
