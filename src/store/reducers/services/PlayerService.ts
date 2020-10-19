import { actionNames } from '../../models/actionNames'
import { DefualtReducerService } from "../../../service/DefualtReducerService";
import { PlayerState } from "../models/Player"

export class PlayerReducerService extends DefualtReducerService<PlayerState>
{
    constructor() {
        super(new PlayerState(), [actionNames.PLAYER])
    }
}