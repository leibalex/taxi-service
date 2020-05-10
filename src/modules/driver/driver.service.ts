import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Driver } from "../../entities";
import { Repository } from "typeorm";
import { DriverStatusEnum, IDriver } from '../../types/driver-types';


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
}
