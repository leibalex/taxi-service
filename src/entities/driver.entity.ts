import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Driver {
  @PrimaryGeneratedColumn("uuid")
  public id: string;
}
