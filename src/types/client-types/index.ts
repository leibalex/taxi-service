import { IOrder } from '../order-types';

export interface IClient {
  id: string;
  orders?: IOrder[];
}
