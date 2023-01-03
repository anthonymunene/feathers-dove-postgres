import type { TransportConnection, Params } from '@feathersjs/feathers';
import type { Users, UsersData, UsersQuery, UsersService } from './services/users/users';
export type { Users, UsersData, UsersQuery };
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client';
declare const usersServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
type UsersClientService = Pick<UsersService<Params<UsersQuery>>, typeof usersServiceMethods[number]>;
export interface ServiceTypes {
    users: UsersClientService;
}
/**
 * Returns a typed client for the feathers-postgres app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export declare const createClient: <Configuration = any>(connection: TransportConnection<ServiceTypes>, authenticationOptions?: Partial<AuthenticationClientOptions>) => import("@feathersjs/feathers").Application<ServiceTypes, Configuration>;
