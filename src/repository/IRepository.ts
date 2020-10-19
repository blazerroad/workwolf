import {IEntity} from './IEntity';
import {QueryContext} from './QueryContext';

export interface IRepository<TEntity extends IEntity> {
    getById(id: string): Promise<TEntity>;
    all(): Promise<Array<TEntity>>;
    query(context: QueryContext): Promise<Array<TEntity>>;
    add(entity: TEntity): Promise<TEntity>;
    update(entity: TEntity): Promise<TEntity>;
    map(response: Response): Promise<Array<TEntity>>;
}