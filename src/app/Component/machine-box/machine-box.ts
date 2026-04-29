import { Component, input } from '@angular/core';
import { MachineStatus } from '../../Model/MachineState';

@Component({
  selector: 'app-machine-box',
  imports: [],
  templateUrl: './machine-box.html'
})
export class MachineBox {
  name = input.required<string>();
  icon = input.required<string>();
  status = input.required<MachineStatus>();
}
