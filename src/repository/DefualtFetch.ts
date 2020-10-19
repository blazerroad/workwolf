import { IDb } from './IDb'

export class DefualtFetch implements IDb {
    fetch(param: any): Promise<Response> {
        throw "Not Implemented , You can implement any backend FETCH logic"
    }
}