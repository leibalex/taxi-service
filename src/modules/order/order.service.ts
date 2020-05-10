import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "../../entities";
import { Repository } from "typeorm";
import { IOrderCreate, OrderStatusEnum } from '../../types/order-types';
import { ClientService } from "../client/client.service";
import { DriverService } from "../driver/driver.service";


@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Order)
    private readonly _orderRepository: Repository<Order>,
    private readonly _clientService: ClientService,
    private readonly _driverService: DriverService
  ) {}

  public async createOrder(payload: IOrderCreate): Promise<any> {
    const { clientId, ...rest } = payload;

    const driver = await this._driverService.getFreeDriver();

    if (!driver) {
      throw new NotFoundException("Free driver not found, try again later.");
    }

    const client = await this._clientService.getClient(clientId);

    if (!client) {
      throw new NotFoundException(`Client with id: [${clientId}] not found.`);
    }

    const newOrder = this._orderRepository.create({
      ...rest,
      client,
      driver,
      status: OrderStatusEnum.new
    });

    await this._orderRepository.insert(newOrder);
  }

  public async startTrip(orderId: string): Promise<void> {
    const order = await this._orderRepository.findOne(orderId, {
      where: {
        status: OrderStatusEnum.new
      }
    });

    if (!order) {
      throw new NotFoundException(`Cannot start trip, appropriate order with id: [${orderId}] not found.`);
    }

    await this._orderRepository.update(orderId, {
      status: OrderStatusEnum.inWay
    });
  }

  public async finishTrip(orderId: string): Promise<void> {
    const order = await this._orderRepository.findOne(orderId, {
      where: {
        status: OrderStatusEnum.inWay
      }
    });

    if (!order) {
      throw new NotFoundException(`Cannot finish order, appropriate order with id: [${orderId}] not found`);
    }

    await this._orderRepository.update(orderId, {
      status: OrderStatusEnum.finish
    });
  }
}
