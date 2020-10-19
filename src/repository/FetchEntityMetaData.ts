import {IDb} from './IDb'

export class FetchEntityMetaData<TDb extends IDb> {
    dbName?: string;
    col?: string;
    entityType?: string;
    db?: TDb
}
