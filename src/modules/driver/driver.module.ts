import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Driver } from "../../entities";
import { DriverService } from "./driver.service";

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  providers: [DriverService],
  exports: [DriverService]
})
export class DriverModule {

}
