import { BaseReduxService } from "../../../service/BaseReduxService";
import { Player } from '../../models/Player';
import {PlayerRepository} from '../repositories/PlayerRepository';

export class PlayerService extends BaseReduxService<Player,PlayerRepository> {
    constructor(dispatch: any)
    {
        const repository = new  PlayerRepository();
        super(dispatch,repository);
    }

}