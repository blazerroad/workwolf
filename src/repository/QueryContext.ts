import {Param} from './Param';

export class QueryContext {
    
    partitionKey: string;
    actionname: string;
    query: string;
    parameters: Array<Param>

    constructor(query: string, parameters: Array<Param>, actionname: string, partitionKey: string) {
        this.partitionKey = partitionKey;
        this.actionname = actionname;
        this.query = query;
        this.parameters = parameters;
    }
}