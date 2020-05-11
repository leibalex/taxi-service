import { Body, Controller, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import { IOrderCreate } from "../../types/order-types";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateOrderDto } from "./dto/create.order.dto";
import { OrderIdDto } from "./dto/orderId.dto";
import { IBaseResponse } from "../../types";


@ApiTags("Orders")
@Controller("orders")
export class OrderController {

  constructor(
    private readonly _orderService: OrderService
  ) {}

  @ApiOperation({
    summary: "Создать новый заказ"
  })
  @ApiBody({
    type: CreateOrderDto
  })
  @Post("")
  public async create(@Body() payload: IOrderCreate): Promise<IBaseResponse> {
    return {
      statusCode: 0,
      data: await this._orderService.createOrder(payload)
    };
  }

  @ApiOperation({
    summary: "Старт поездки"
  })
  @ApiBody({
    type: OrderIdDto
  })
  @Post("start")
  public async start(@Body() payload: OrderIdDto): Promise<void> {
    return await this._orderService.startTrip(payload.id);
  }

  @ApiOperation({
    summary: "Завершение поездки"
  })
  @ApiBody({
    type: OrderIdDto
  })
  @Post("finish")
  public async finish(@Body() payload: OrderIdDto): Promise<void> {
    return await this._orderService.finishTrip(payload.id);
  }
}
