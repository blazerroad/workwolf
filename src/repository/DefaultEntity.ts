import { IEntity } from './IEntity'

export class DefaultEntity implements IEntity {

    id?: string;
    status?: number;
    ok?: boolean;
    
    constructor(id?: string, status?: number, ok?: boolean) {
        this.id = id;
        this.status = status;
        this.ok = ok;
    }
}
