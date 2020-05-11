import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "./config/config.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "./config/config.service";
import { OrderModule } from "./modules/order/order.module";
import { StatsModule } from "./modules/stats/stats.module";

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.typeOrmConfig,
      inject: [ConfigService]
    }),
    OrderModule,
    StatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
