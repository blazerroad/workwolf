import { PlayerReducerService } from  "./PlayerService"

export class ReducerServices {
    public static _instance: ReducerServices;
    public static instance(): ReducerServices {
        if (!ReducerServices._instance) {
            ReducerServices._instance = new ReducerServices();
        }
        return ReducerServices._instance;
    }

    playerReducer: PlayerReducerService = new PlayerReducerService()

    private constructor() {

    }
}