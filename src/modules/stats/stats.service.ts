import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "../../entities";
import { Repository } from "typeorm";
import { OrderStatusEnum } from "../../types/order-types";


@Injectable()
export class StatsService {

  constructor(
    @InjectRepository(Order)
    private readonly _orderRepository: Repository<Order>
  ) {}

  /**
   * How many orders driver complete
   * @param driverId - unique driver id
   * @return Completed orders count
   */
  public async completeOrdersCount(driverId: string): Promise<number> {
    const { count } = await this._orderRepository.createQueryBuilder("order")
      .select("COUNT(*)", "count")
      .where("order.driver_id = :id", { id: driverId })
      .andWhere("order.status = :status", { status: OrderStatusEnum.finish })
      .getRawOne();

    return count;
  }

  /**
   * Total orders sum
   * @param driverId - unique driver id
   * @return Completed orders sum
   */
  public async completeOrdersSum(driverId: string): Promise<number> {
    const { sum } = await this._orderRepository.createQueryBuilder("order")
      .select("SUM(order.cost)", "sum")
      .where("order.driver_id = :id", { id: driverId })
      .andWhere("order.status = :status", { status: OrderStatusEnum.finish })
      .getRawOne();

    return sum;
  }

  /**
   * Most frequently destination address
   * @param driverId - unique driver id
   * @return address
   */
  public async mostOftenDestinationAddress(driverId: string): Promise<string> {
    const res = await this._orderRepository.query(`select * from 
(
\tselect "order".destination_address, count(*)as count from "order"
\twhere "order".status = 'finish'
\tand "order".driver_id = '${driverId}'
\tgroup by "order".destination_address
)
as s order by s.count desc limit 1`);


    if (!res.length) {
      throw new NotFoundException(`Most often destination address for driver with id: [${driverId}] not found.`);
    }

    return res[0].destination_address;
  }

  /**
   * Average order time
   * @param driverId - unique driver id
   * @return time
   */
  public async averageOrderTime(driverId: string): Promise<Record<any, any>> {
    return await this._orderRepository.createQueryBuilder("order")
      .select("AVG(order.destination_date - order.boarding_date)", "average")
      .where("order.driver_id = :id", { id: driverId })
      .andWhere("order.status = :status", { status: OrderStatusEnum.finish })
      .getRawOne();
  }
}
