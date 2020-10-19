import { IEntity } from '../repository/IEntity';
import {IRepository} from '../repository/IRepository';
import {IService} from './IService'
import {QueryContext} from '../repository/QueryContext';

export class BaseSerivce<TEntity extends IEntity, TRepository extends IRepository<TEntity>> implements IService<TEntity> {
    
    repository: TRepository
    constructor(repository: TRepository) {
        this.repository = repository;
    }

    getById(id: string): Promise<TEntity> {
        return this.repository.getById(id);
    }
    all(): Promise<Array<TEntity>> {
        return this.repository.all();
    }
    query(context: QueryContext): Promise<Array<TEntity>> {
        return this.repository.query(context);
    }
    add(entity: TEntity): Promise<TEntity> {
        return this.repository.add(entity);
    }
    update(entity: TEntity): Promise<TEntity> {
        return this.repository.update(entity);
    }

}