import { IEntity } from '../repository/IEntity';
import { QueryContext } from '../repository/QueryContext';
import { IRepository } from '../repository/IRepository';
import { IReduxService } from './IReduxService';

export class BaseReduxService<TEntity extends IEntity, TRepository extends IRepository<TEntity>> implements IReduxService<TEntity> {
    repository: TRepository;
    reduxDispatch: any;

    constructor(dispatch: any, repository: TRepository) {
        this.repository = repository;
        this.reduxDispatch = dispatch;
    }


    dispatch(actionName: string, entity: TEntity | TEntity[]): void {
        const ent = Array.isArray(entity) ? entity[0] : (entity as TEntity);
        if (ent.status === 304)
            return;
        if (!ent.ok) {
            throw new Error("There is some thing wrong from API");
        }
        this.reduxDispatch({ type: actionName, entity: entity })
    }

    async  getById(actionName: string, id: string): Promise<void> {
        const response = await this.repository.getById(id);
        this.dispatch(actionName, response);

    }
    async all(actionName: string): Promise<void> {
        const response = await this.repository.all();
        this.dispatch(actionName, response);

    }
    async  query(actionName: string, context: QueryContext): Promise<void> {
        const response = await this.repository.query(context);
        this.dispatch(actionName, response);
    }
    async  add(entity: TEntity): Promise<void> {
        await this.repository.add(entity);
    }
    async  update(entity: TEntity): Promise<void> {
        await this.repository.update(entity);
    }
}