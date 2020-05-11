import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "../../entities";
import { DriverModule } from "../driver/driver.module";
import { ClientModule } from "../client/client.module";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";


@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    DriverModule,
    ClientModule
  ],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {

}
