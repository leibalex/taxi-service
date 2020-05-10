import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { IClient } from "../types";

@Entity()
export class Client implements IClient {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @OneToMany(() => Order, (order) => order.client)
  public orders?: Order[];
}
