import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "../../entities";
import { Repository } from "typeorm";
import { IClient } from "../../types/client-types";


@Injectable()
export class ClientService {

  constructor(
    @InjectRepository(Client)
    private readonly _clientRepository: Repository<Client>
  ) {}

  /**
   * Not in active trip client
   * @param id - unique client id
   * return client
   */
  public async getClient(id: string): Promise<IClient> {
    const client = await this._clientRepository.createQueryBuilder("client")
      .leftJoinAndSelect("client.orders", "order", "order.status != 'finish'")
      .where("client.id = :id", { id })
      .getOne();

    if (client?.orders?.length) {
      return null;
    }
    return client;
  }
}
