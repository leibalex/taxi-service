import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "../../entities";
import { StatsService } from "./stats.service";
import { StatsController } from "./stats.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [StatsService],
  controllers: [StatsController]
})
export class StatsModule {

}
