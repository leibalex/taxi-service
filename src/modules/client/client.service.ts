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

  public async getClient(id: string): Promise<IClient> {
    const client = await this._clientRepository.createQueryBuilder("client")
      .leftJoinAndSelect("client.orders", "order", "order.status != 'finish'")
      .where("client.id = :id", { id })
      .getOne();
    console.dir(client);
    if (client?.orders?.length) {
      return null;
    }
    return client;
  }
}
