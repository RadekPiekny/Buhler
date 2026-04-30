import { MachineStatus } from "@models/Enum/MachineState";
import { IMachine } from "@models/Interface/machine";
import { IUser } from "@models/Interface/user";

export const MOCK_USERS: IUser[] = [
  { id: 1, name: 'Jan Novák',     email: 'jan.novak@buhler.com' },
  { id: 2, name: 'Eva Svoboda',   email: 'eva.svoboda@buhler.com' },
  { id: 3, name: 'Tomáš Král',    email: 'tomas.kral@buhler.com' },
  { id: 4, name: 'Lucie Marková', email: 'lucie.markova@buhler.com' },
];

export const MOCK_MACHINES: IMachine[] = [
  { id: 1, name: 'Scale',      icon: { name: 'system_update_alt', CssClass: 'material-icons' },         status: MachineStatus.Running },
  { id: 2, name: 'Bag Attach', icon: { name: 'chrome_reader_mode', CssClass: 'material-icons-outlined' },     status: MachineStatus.Warning },
  { id: 3, name: 'Packer',     icon: { name: 'video_label', CssClass: 'material-icons-outlined' }, status: MachineStatus.Running },
  { id: 4, name: 'Bag Closer', icon: { name: 'grid_on', CssClass: 'material-icons-outlined' },         status: MachineStatus.Alarm   },
];