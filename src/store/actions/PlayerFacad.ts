import { Player } from "../models/Player";
import { Services } from "./services/Services";
import { actionNames } from "../models/actionNames"

export const Add = async (enitity: Player) => {
    await Services.instance.player.add(enitity);
}

export const GetById = async (id: string) => {
    await Services.instance.player.getById(actionNames.STOREPLAYER, id);
}