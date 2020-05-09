import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
  @PrimaryGeneratedColumn("uuid")
  public id: string;
}
