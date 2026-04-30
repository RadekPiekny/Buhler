import { MachineStatus } from "@models/Enum/MachineState";

export interface IMachine {
  id: number;
  name: string;
  status: MachineStatus;
  icon: IMachineIcon;
}

export interface IMachineIcon {
  name: string;
  CssClass: string;
}