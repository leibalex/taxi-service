import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class Client {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @OneToMany(() => Order, (order) => order.client)
  public orders: Order[];
}
