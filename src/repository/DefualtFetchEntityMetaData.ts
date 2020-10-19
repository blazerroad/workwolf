import { FetchEntityMetaData } from './FetchEntityMetaData'
import { DefualtFetch } from './DefualtFetch'

export class DefaultFetchEntityMetaData extends FetchEntityMetaData<DefualtFetch>
{
    constructor(entityType: string, col: string, dbName: string) {
        super();
        this.dbName = dbName;
        this.col = col;
        this.entityType = entityType;
        this.db = new DefualtFetch();

    }
}