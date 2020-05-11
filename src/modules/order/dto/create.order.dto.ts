import { IOrderCreate } from "../../../types/order-types";
import { ApiProperty } from "@nestjs/swagger";


export class CreateOrderDto implements IOrderCreate {

  @ApiProperty({
    description: "Адрес посадки",
    type: String,
    example: "Улица Прикольная 7"
  })
  public boarding_address: string;

  @ApiProperty({
    description: "Дата посадки",
    type: Date,
    example: new Date()
  })
  public boarding_date: Date;

  @ApiProperty({
    description: "Идентификатор клиента",
    type: String,
    example: "8492aea3-425a-42d6-aa76-3d951e18e2ac"
  })
  public clientId: string;

  @ApiProperty({
    description: "Стоимость поездки",
    type: Number,
    example: 243
  })
  public cost: number;

  @ApiProperty({
    description: "Адрес высадки",
    type: String,
    example: "Улица Прикольная 17"
  })
  public destination_address: string;

  @ApiProperty({
    description: "Дата высадки",
    type: Date,
    example: new Date()
  })
  public destination_date: Date;

}
