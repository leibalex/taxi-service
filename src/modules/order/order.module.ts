import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "../../entities";
import { DriverModule } from "../driver/driver.module";
import { ClientModule } from "../client/client.module";


@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    DriverModule,
    ClientModule
  ]
})
export class OrderModule {

}
