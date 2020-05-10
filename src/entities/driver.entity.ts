import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class Driver {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @OneToMany(() => Order, (order) => order.driver)
  public orders?: Order[];
}
