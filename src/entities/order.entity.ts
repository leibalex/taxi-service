import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
