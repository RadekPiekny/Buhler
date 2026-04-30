import { MachineStatus } from '@models/Enum/MachineState';

export const statusBg = (status: MachineStatus): string => ({
  [MachineStatus.Running]: 'bg-neutral-500 text-white',
  [MachineStatus.Warning]: 'bg-warning',
  [MachineStatus.Alarm]:   'bg-alarm text-white',
})[status];

export const statusIconName = (status: MachineStatus): string => ({
  [MachineStatus.Running]: 'settings_backup_restore',
  [MachineStatus.Warning]: 'warning',
  [MachineStatus.Alarm]:   'error_outline',
})[status];

export const statusIconColor = (status: MachineStatus): string => ({
  [MachineStatus.Running]: 'text-positive-400',
  [MachineStatus.Warning]: '',
  [MachineStatus.Alarm]:   '',
})[status];