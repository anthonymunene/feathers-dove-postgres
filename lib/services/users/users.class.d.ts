import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Users, UsersData, UsersPatch, UsersQuery } from './users.schema';
export interface UsersParams extends KnexAdapterParams<UsersQuery> {
}
export declare class UsersService<ServiceParams extends Params = UsersParams> extends KnexService<Users, UsersData, ServiceParams, UsersPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
