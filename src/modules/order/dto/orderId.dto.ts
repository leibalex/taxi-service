import { ApiProperty } from "@nestjs/swagger";

export class OrderIdDto {

  @ApiProperty({
    description: "Идентификатор заказа",
    type: String,
    example: "1916a5b3-b568-4c10-9612-bf126e8408af"
  })
  public id: string;
}
