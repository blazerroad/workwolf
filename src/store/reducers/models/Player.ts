import { actionNames } from '../../models/actionNames'
import { Player } from '../../models/Player'

export class PlayerState {
    public [actionNames.PLAYER] : Player;
}