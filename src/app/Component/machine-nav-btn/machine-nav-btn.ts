import { Component, computed, input } from '@angular/core';
import { statusBg, statusIconColor, statusIconName } from '@functions/machine-status';
import { MachineStatus } from '@models/Enum/MachineState';

@Component({
  selector: 'app-machine-nav-btn',
  imports: [],
  templateUrl: './machine-nav-btn.html',
})
export class MachineNavBtn {
  name = input.required<string>();
  status = input.required<MachineStatus>();

  statusBg = computed(() => statusBg(this.status()));
  statusIconName = computed(() => statusIconName(this.status()));
  statusIconColor = computed(() => statusIconColor(this.status()));
}
