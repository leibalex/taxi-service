import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Driver } from "./driver.entity";
import { Client } from "./client.entity";
import { OrderStatusEnum } from "../modules/order/types";

@Entity()
export class Order {

  @PrimaryGeneratedColumn()
  public id: string;

  @Column({ type: "text" })
  public boarding_address: string;

  @Column({ type: "text" })
  public destination_address: string;

  @Column({ type: "timestamp with time zone", precision: null })
  public boarding_date: Date;

  @Column({ type: "timestamp with time zone", precision: null })
  public destination_date: Date;

  @Column({ type: "float" })
  public cost: number;

  @ManyToOne(() => Driver, (driver) => driver.orders)
  @JoinColumn({ name: "driver_id" })
  public driver: Driver;

  @ManyToOne(() => Client, (client) => client.orders)
  @JoinColumn({ name: "client_id" })
  public client: Client;

  @Column({ type: "enum", enum: OrderStatusEnum })
  public status: OrderStatusEnum;
}
