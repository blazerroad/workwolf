import { IEntity } from '../repository/IEntity';
import { QueryContext } from '../repository/QueryContext';

export interface IService<TEntity extends IEntity> {
    getById(id: string): Promise<TEntity>;
    all(): Promise<Array<TEntity>>;
    query(context: QueryContext): Promise<Array<TEntity>>;
    add(entity: TEntity): Promise<TEntity>;
    update(entity: TEntity): Promise<TEntity>;
}