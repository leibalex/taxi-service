import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Driver } from "../../entities";
import { EntityManager, Repository } from "typeorm";
import { DriverStatusEnum, IDriver } from "../../types/driver-types";


@Injectable()
export class DriverService {

  constructor(
    @InjectRepository(Driver)
    private readonly _driverRepository: Repository<Driver>
  ) {}

  public async getFreeDriver(): Promise<IDriver> {
    return await this._driverRepository.findOne({
      where: {
        status: DriverStatusEnum.free
      }
    });
  }

  public async updateDriverStatus(driver: string | Driver, newStatus: DriverStatusEnum, trManager?: EntityManager): Promise<void> {

    if (trManager) {
      await trManager.update(Driver, driver, { status: newStatus} );
    } else {
      await this._driverRepository.update(driver, {
        status: newStatus
      });
    }
  }
}
