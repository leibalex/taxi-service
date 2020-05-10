import { IClient } from "../client-types";
import { IDriver } from "../driver-types";

export enum OrderStatusEnum {
  new = "new",
  inWay = "inWay",
  finish = "finish"
}

export interface IOrder {
  id: string;
  boarding_address: string;
  destination_address: string;
  boarding_date: Date;
  destination_date: Date;
  cost: number;
  client: IClient;
  driver: IDriver;
  status: OrderStatusEnum;
}

export interface IOrderCreate {
  boarding_address: string;
  destination_address: string;
  boarding_date: Date;
  destination_date: Date;
  cost: number;
  clientId: string;
}
