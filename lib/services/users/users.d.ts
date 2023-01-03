import type { Application } from '../../declarations';
import { UsersService } from './users.class';
export * from './users.class';
export * from './users.schema';
export declare const users: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        users: UsersService;
    }
}
