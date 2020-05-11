import { Body, Controller, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import { IOrderCreate } from "../../types/order-types";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateOrderDto } from "./dto/create.order.dto";
import { OrderIdDto } from "./dto/orderId.dto";


@ApiTags("Orders")
@Controller("orders")
export class OrderController {

  constructor(
    private readonly _orderService: OrderService
  ) {}

  @ApiOperation({
    summary: ""
  })
  @ApiBody({
    type: CreateOrderDto
  })
  @Post("")
  public async create(@Body() payload: IOrderCreate): Promise<void> {
    return await this._orderService.createOrder(payload);
  }

  @ApiOperation({
    summary: ""
  })
  @ApiBody({
    type: OrderIdDto
  })
  @Post("start")
  public async start(@Body() payload: OrderIdDto): Promise<void> {
    return await this._orderService.startTrip(payload.id);
  }

  @ApiOperation({
    summary: ""
  })
  @ApiBody({
    type: OrderIdDto
  })
  @Post("finish")
  public async finish(@Body() payload: OrderIdDto): Promise<void> {
    return await this._orderService.finishTrip(payload.id);
  }
}
