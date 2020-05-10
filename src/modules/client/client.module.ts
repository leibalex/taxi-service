import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "../../entities";


@Module({
  imports: [
    TypeOrmModule.forFeature([Client])
  ],
  providers: [Client],
  exports: [Client]
})
export class ClientModule {

}
