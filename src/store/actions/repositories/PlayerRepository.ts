import { DefaultRespository } from '../../../repository/DefaultRespository';
import { DefaultFetchEntityMetaData } from "../../../repository/DefualtFetchEntityMetaData"
import { Player } from '../../models/Player'

export class PlayerRepository extends DefaultRespository<Player> {

    constructor() {
        const metaData = new DefaultFetchEntityMetaData("Player", "Player", "WorkWolf");
        super(metaData);
    }

    async map(response: Response): Promise<Array<Player>> {
        const mapping = this.innerMap(response, new Player(), new Array<Player>());
        return mapping;
    }
}