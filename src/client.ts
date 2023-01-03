// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import type { TransportConnection, Params } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import type { Users, UsersData, UsersQuery, UsersService } from './services/users/users'
export type { Users, UsersData, UsersQuery }

import type { AuthenticationClientOptions } from '@feathersjs/authentication-client'

const usersServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'] as const
type UsersClientService = Pick<UsersService<Params<UsersQuery>>, typeof usersServiceMethods[number]>

export interface ServiceTypes {
  users: UsersClientService
  //
}

/**
 * Returns a typed client for the feathers-postgres app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = <Configuration = any>(
  connection: TransportConnection<ServiceTypes>,
  authenticationOptions: Partial<AuthenticationClientOptions> = {}
) => {
  const client = feathers<ServiceTypes, Configuration>()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))

  client.use('users', connection.service('users'), {
    methods: usersServiceMethods
  })
  return client
}
