import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { DriverStatusEnum, IDriver } from "../types";

@Entity()
export class Driver implements IDriver {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @OneToMany(() => Order, (order) => order.driver)
  public orders?: Order[];

  @Column({ type: "enum", enum: DriverStatusEnum })
  public status: DriverStatusEnum;
}
