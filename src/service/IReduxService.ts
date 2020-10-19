import { IEntity } from '../repository/IEntity';
import { QueryContext } from '../repository/QueryContext';

export interface IReduxService<TEntity extends IEntity> {
    getById(actionName: string, id: string): Promise<void>;
    all(actionName: string): Promise<void>;
    query(actionName: string, context: QueryContext): Promise<void>;
    add(entity: TEntity): Promise<void>;
    update(entity: TEntity): Promise<void>;
    dispatch(actionName: string, entity: TEntity): void
}