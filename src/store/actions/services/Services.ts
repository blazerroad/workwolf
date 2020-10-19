import { PlayerService } from "./PlayerServices";

export class Services {
    public static instance: Services;

    public static init(dispatch: any) {
        Services.instance = new Services(dispatch);
    }

    public player : PlayerService

    private constructor(dispatch: any) {
        this.player = new PlayerService(dispatch);
    }
}