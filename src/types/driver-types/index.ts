import { Order } from "../../entities";

export interface IDriver {
  id: string;
  orders?: Order[];
  status: DriverStatusEnum;
}

export enum DriverStatusEnum {
  free = "free",
  busy = "busy"
}
