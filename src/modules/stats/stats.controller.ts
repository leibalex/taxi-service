import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { StatsService } from "./stats.service";
import { IBaseResponse } from '../../types';

@ApiTags("Driver stats")
@Controller("drivers/:id/stats")
export class StatsController {

  constructor(
    private readonly _statsService: StatsService
  ) {}

  @ApiOperation({
    summary: "Куда чаще всего возил таксист"
  })
  @ApiParam({
    description: "Идентификатор таксиста",
    type: String,
    name: "id",
    example: "8d55efba-211d-4e70-bfd7-0f395244c113"
  })
  @Get("often-destination")
  public async getMostOftenDestinationAddress(@Param("id") id: string): Promise<IBaseResponse> {
    return {
      statusCode: 0,
      address: await this._statsService.mostOftenDestinationAddress(id)
    };
  }

  @ApiOperation({
    summary: "На какую сумму отвез"
  })
  @ApiParam({
    description: "Идентификатор таксиста",
    type: String,
    name: "id",
    example: "8d55efba-211d-4e70-bfd7-0f395244c113"
  })
  @Get("complete-orders-sum")
  public async getSum(@Param("id") id: string): Promise<IBaseResponse> {
    return {
      statusCode: 0,
      sum: await this._statsService.completeOrdersSum(id)
    };
  }

  @ApiOperation({
    summary: "Сколько выполнил заказов"
  })
  @ApiParam({
    description: "Идентификатор таксиста",
    type: String,
    name: "id",
    example: "8d55efba-211d-4e70-bfd7-0f395244c113"
  })
  @Get("complete-orders-count")
  public async getCount(@Param("id") id: string): Promise<IBaseResponse> {
    return {
      statusCode: 0,
      count: await this._statsService.completeOrdersCount(id)
    };
  }

  @ApiOperation({
    summary: "Среднее время поездки"
  })
  @ApiParam({
    description: "Идентификатор таксиста",
    type: String,
    name: "id",
    example: "8d55efba-211d-4e70-bfd7-0f395244c113"
  })
  @Get("average-time")
  public async getAverageCount(@Param("id") id: string): Promise<IBaseResponse> {
    return {
      statusCode: 0,
      result: await this._statsService.averageOrderTime(id)
    };
  }
}
