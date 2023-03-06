import { CreateSubscriptionDTO, SubscriptionDTO } from './subscription.model';

export interface ISubscriptionService {
  addSubscription(
    subscription: CreateSubscriptionDTO,
  ): Promise<SubscriptionDTO>;
  getAllSubscriptions(): Promise<SubscriptionDTO[]>;
  cancelSubscription(id: string): Promise<SubscriptionDTO>;
  getSubscription(id: string): Promise<SubscriptionDTO>;
}

export interface ISubscriptionGateway {
  addSubscription(
    subscription: CreateSubscriptionDTO,
  ): Promise<SubscriptionDTO>;
  getAllSubscriptions(): Promise<SubscriptionDTO[]>;
  cancelSubscription(id: string): Promise<SubscriptionDTO>;
  getSubscription(id: string): Promise<SubscriptionDTO>;
}
