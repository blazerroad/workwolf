import { IEntity } from './IEntity';
import { IRepository } from './IRepository';
import { DefaultFetchEntityMetaData } from './DefualtFetchEntityMetaData'
import { QueryContext } from './QueryContext'

export abstract class DefaultRespository<TEntity extends IEntity> implements IRepository<TEntity>
{
    metaData: DefaultFetchEntityMetaData;
    constructor(metaData: DefaultFetchEntityMetaData) {
        this.metaData = metaData;

    }

    async getById(id: string): Promise<TEntity> {
        throw "Not Implemented , You can implement any backend FETCH logic"
    }

    async all(): Promise<Array<TEntity>> {
        throw "Not Implemented , You can implement any backend FETCH logic"
    }

    async query(context: QueryContext): Promise<Array<TEntity>> {
        throw "Not Implemented , You can implement any backend FETCH logic"
    }
    async add(entity: TEntity): Promise<TEntity> {
        throw "Not Implemented , You can implement any backend FETCH logic"
    }
    async update(entity: TEntity): Promise<TEntity> {
        throw "Not Implemented , You can implement any backend FETCH logic"
    }


    /**
     * This function Map un typed Fetch response to ENTITY TYPE
     * @param response 
     * @param entity 
     * @param entities 
     */
    async innerMap(response: Response, entity: TEntity, entities: Array<TEntity>): Promise<Array<TEntity>> {
        if (!response.ok || response.status === 304) {
            entity.status = response.status;
            entity.ok = response.ok;
            entities.push(entity);
            return entities;
        }
        var resData = await response.json();
        if (!resData || !resData.Documents || !Array.isArray(resData.Documents)) {
            entity.status = 501;
            entities.push(entity);
            return entities;
        }

        const datas = resData.Documents;
        for (let index = 0; index < datas.length; index++) {
            const rowEntity = { ...entity }
            for (const key in rowEntity) {
                rowEntity[key] = datas[index][key]
            }
            rowEntity.ok = response.ok;
            rowEntity.status = response.status;
            entities.push(rowEntity)
        }
        return entities;
    }

    abstract map(response: Response): Promise<Array<TEntity>>;

}
